
FROM ruby:2.5
LABEL Name=rushstack.io-website Version=0.0.1
RUN apt-get update -qq
RUN mkdir /src
WORKDIR /src
COPY Gemfile /src/Gemfile
COPY Gemfile.lock /src/Gemfile.lock
RUN bundle install
COPY . /src