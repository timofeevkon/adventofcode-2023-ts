init: di
envs: de
di: docker-init
du: docker-up
dd: docker-down
de: docker-envs

docker-down:
	docker-compose down --remove-orphans

docker-up:
	docker-compose up -d --force-recreate

docker-init: docker-envs
	docker-compose down --remove-orphans
	docker-compose up -d
	sleep 3
	./node yarn

docker-secrets:
	test -f ./.env.secrets || cp -n ./.env.vars.secrets ./.env.secrets

docker-envs: docker-secrets
	set -a && . ./.env.vars.dev  && . ./.env.secrets && set +a && USER_ID=$$(id -u) envsubst < ./.env.template 	> ./.env

run:
	./node -- TASK= yarn run
