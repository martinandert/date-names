BIN = ./node_modules/.bin

test: lint
	@$(BIN)/mocha -t 5000 -b -R spec spec.js

lint:
	@$(BIN)/jshint index.js cs.js da.js de.js en.js es.js fi.js fr.js nl.js pt-br.js ru.js sk.js sv.js tr.js

install:
	npm install

release-patch: test
	@$(call release,patch)

release-minor: test
	@$(call release,minor)

release-major: test
	@$(call release,major)

publish:
	git push --tags origin HEAD:master
	npm publish

define release
	npm version $(1) -m "release v%s"
endef
