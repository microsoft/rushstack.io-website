# Getting Started

## Dependencies

To run this site locally, you'll first need the following dependencies:

* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](https://bundler.io/)
* [Jekyll](https://jekyllrb.com/)

## Run Locally

Once the above dependencies are installed on your local machine, run the following commands to install the latest dependencies
and run the solution locally:

1. Install the site's gem dependencies with `bundle install` at the root of the project.
2. Start the local web server with `jekyll serve` or for incremental builds run `jekyll serve --incremental`.
3. Once the site has been generated you'll be able to navigate to it at [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

## Run Locally using Docker

Make sure you have `docker` and `docker-compose` installed.

1. In the root directory of the project, run the following command:
    <br>
    ```sh
    $ docker-compose -f docker-compose.yml up -d --build
    ```

    <details>
    <summary>output</summary>
    <p>

    ```sh
    Creating network "rushstackio-website_default" with the default driver
    Building rushstack.io-website
    Step 1/9 : FROM ruby:2.3.3
     ---> 0e1db669d557
    Step 2/9 : LABEL Name=rushstack.io-website Version=0.0.1
     ---> Using cache
     ---> ded94bfd2f3f
    Step 3/9 : RUN apt-get update -qq
     ---> Using cache
     ---> 6d68ddcd75f5
    Step 4/9 : RUN mkdir /src
     ---> Using cache
     ---> 8b9d0899b00f
    Step 5/9 : WORKDIR /src
     ---> Using cache
     ---> 86e871913c4b
    Step 6/9 : COPY Gemfile /src/Gemfile
     ---> Using cache
     ---> bd0eb4de4238
    Step 7/9 : COPY Gemfile.lock /src/Gemfile.lock
     ---> Using cache
     ---> 30111ec89584
    Step 8/9 : RUN bundle install
     ---> Using cache
     ---> 0a4ea318ec28
    Step 9/9 : COPY . /src
     ---> 9cea59729eb6
    Successfully built 9cea59729eb6
    Successfully tagged rushstack.io-website:latest
    Creating rushstackio-website_rushstack.io-website_1 ... done
    ```

    </p>
    </details>
    <br>

2. Once the site has been generated you'll be able to navigate to it at [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

    <br>
    <details><summary>Screenshot</summary>
    <p>

    ![website screenshot](/docs/images/website_screenshot.png)

    </p>
    </details>
    <br>
    
3. To stop the running container, run the following command:
    <br>
    ```sh
    $ docker-compose -f docker-compose.yml down
    ```

    <details>
    <summary>output</summary>
    <p>

    ```sh
    Stopping rushstackio-website_rushstack.io-website_1 ... done
    Removing rushstackio-website_rushstack.io-website_1 ... done
    Removing network rushstackio-website_default
    ```

    </p></details>

# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# Legal Notices

Microsoft and any contributors grant you a license to the Microsoft documentation and other content
in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode),
see the [LICENSE](LICENSE) file, and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the
[LICENSE-CODE](LICENSE-CODE) file.

Microsoft, Windows, Microsoft Azure and/or other Microsoft products and services referenced in the documentation
may be either trademarks or registered trademarks of Microsoft in the United States and/or other countries.
The licenses for this project do not grant you rights to use any Microsoft names, logos, or trademarks.
Microsoft's general trademark guidelines can be found at http://go.microsoft.com/fwlink/?LinkID=254653.

Privacy information can be found at https://privacy.microsoft.com/en-us/

Microsoft and any contributors reserve all others rights, whether under their respective copyrights, patents,
or trademarks, whether by implication, estoppel or otherwise.
