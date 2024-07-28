FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Noolayko/FI-BOT-UGANDA- /root/FI-BOT-UGANDA-

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/FI-BOT-UGANDA-/node_modules

# Install dependencies
WORKDIR /root/FI-BOT-UGANDA-
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
