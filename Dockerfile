FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Noolayko/FI-BOT-UGANDA-/root/DeeCeeXxx 

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/DeeCeeXxx/node_modules

# Install dependencies
WORKDIR /root/Noolayko
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
