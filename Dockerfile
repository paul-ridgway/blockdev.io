FROM node:0.10

# Copy ghost
COPY ./source/ghost /srv/ghost

# Copy content for template
RUN cp -R /srv/ghost/content /srv/ghost/content-template

# Copy local files, config, etc
COPY ./fs_root /

WORKDIR /srv/ghost
RUN npm install --production

EXPOSE 2368

CMD [ "/srv/scripts/run-ghost.sh" ]
