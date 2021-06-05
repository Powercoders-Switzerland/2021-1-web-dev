FROM pandoc/latex

RUN apk add --update --no-cache make

ENTRYPOINT ["/usr/bin/make"]