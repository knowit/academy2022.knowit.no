[![Build Status](https://travis-ci.org/knowit/academy.knowit.no.svg?branch=master)](https://travis-ci.org/knowit/academy.knowit.no)

# academy.knowit.no

This is a landing page for information about Knowit Academy Norway. It's
currently work in progress. You can find the current webiste at
https://academy.knowit.no

## About Knowit Academy

Knowit Academy Norway is Knowits formal competency training programme for
Norwegian employees. The target audience are employees in all Knowit
subsidiaries in Norway.

For the year 2018/2019 Knowit Academy consisted of the following programmes:

- Team Lead programme
- Tech Lead programme
- Project Manager programme

Further extensions to the programme is in planning and more information will
be available as soon as it's ready.

## Contribution

You are welcome to participate and contribute, especially if you are an
employee of [Knowit AS](https://www.knowit.no). If you would like to
contribute please send an email to academy@knowit.no.

## Editing pages

All pages are either written in markdown or as react components

**all pages are added under:**

```
/src/pages
```

**All programmes has a top level about page:**

```
/src/pages/programs/<program-name-about.md>
```

Please add pages using the existing structure.

## Publishing an updated site

Changes pushed to github are instantly published. Please verify that all files
have the correct encoding, and that gatsby is able to build the site.

**Please run**

```
$ yarn test
$ yarn build
```

And make sure the changes work.

## Add a pre push git hook
