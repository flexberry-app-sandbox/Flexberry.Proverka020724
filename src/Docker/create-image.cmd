docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proverka020724/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proverka020724/app ../..
