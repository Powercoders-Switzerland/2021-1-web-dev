SOURCES = $(wildcard */Readme.md)
SLIDES = $(SOURCES:Readme.md=slides.html)

all: $(SLIDES)

%/slides.html: %/Readme.md
	pandoc -t revealjs -s -o $@ $< \
		-V revealjs-url=https://cdn.jsdelivr.net/npm/reveal.js@4.1.1 \
		-V theme=white \
		--css https://xn--erklr-mir-mal-efb.ch/2021-1/css/theme/powercoders.css \
		--css ../slides.css \
		--highlight-style tango \
		-V transition="none"

clean:
	rm -rf $(SLIDES)