[![Build Status](https://travis-ci.org/knowit/academy.knowit.no.svg?branch=master)](https://travis-ci.org/knowit/academy.knowit.no)

# academy.knowit.no

This is a landing page for information about Knowit Academy Norway. It's
currently work in progress. You can find the current webiste at
https://academy.knowit.no

This years programmes are in the finals stages of planning.

## About Knowit Academy

Knowit Academy Norway is Knowits formal competency training programme for
Norwegian employees. The target audience are employees in all Knowit
subsidiaries in Norway.

Previously Knowit Academy consisted of the following programmes:

- Team Lead programme
- Tech Lead programme
- Design Lead programme
- Project Manager programme is not going to be held this year

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

**All courses has a top level about page:**

```
/src/pages/courses/<program-name-about.md>
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

## Development

`yarn install` to install latest packages  
`yarn develop` to start local version  
`localhost:8000` address for local page
