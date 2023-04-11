# 123milhas scraper

> CLI tool to scrape 123milhas website and get flight deals

## Getting started

The scraper will create a `output.txt` file with the deals found. This is useful because unlike other websites, 123milhas doesn't show you the price for each day in the calendar automatically. If they add this feature in the future, this script will become obsolete.

### Essencial scripts

```sh
1. Install dependencies:
$ yarn

2. Configure src/index.ts file (from, to, adults, departDates and returnDates)

3. Run the script:
$ yarn start
```

### Development scripts

```sh
Lint files:
$ yarn lint

Prettier files:
$ yarn prettier

Update dependencies:
$ yarn dependencies
```

The script `prepare` is required by Husky to automatically have Git hooks enabled after install. You don't need to run it manually.

## Author

| [![brenobaptista](https://avatars1.githubusercontent.com/u/47641641?s=120&v=4)](https://github.com/brenobaptista) |
| ----------------------------------------------------------------------------------------------------------------- |
| [Breno Baptista](https://github.com/brenobaptista)                                                                |

## License

This project is licensed under the [MIT License](/LICENSE)
