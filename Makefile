SOURCES = $(wildcard */Readme.md)
SLIDES = $(SOURCES:Readme.md=slides.html)
PRISM_INIT_CODE = $(file < prism-init.html)

all: $(SLIDES)

%/slides.html: %/Readme.md
	echo $(PRISM_INIT_CODE)
	pandoc -t revealjs -s -o $@ $< \
		-V revealjs-url=https://cdn.jsdelivr.net/npm/reveal.js@4.1.1 \
		-V theme=white \
		--css https://xn--erklr-mir-mal-efb.ch/2021-1/css/theme/powercoders.css \
		--css ../slides.css \
		--no-highlight \
		-V transition="none" \
		-V header-includes="<link href='https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism.css' rel='stylesheet' />" \
		--include-after-body=prism-init.html

clean:
	rm -rf $(SLIDES)