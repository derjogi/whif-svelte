## About

This app is going to be a simple MVP for asking questions and finding the best suitable answer.
A wee bit similar to a forum or SO or reddit, but with a focus on a 'summary' field, that contains an aggregate
of all the opinions of the individual posts. (Well, at least of those posters that care to integrate their opinion into the summary.

## Road map

I'm still at the very beginning / ground zero, so I'll use this as kind of my issue-tracker until I have something at least half-way working

TODO:
* Firebase Integration
* Possibility to create a new 'topic'
* In the 'Topic':
** Field to ask a question
** Answers
** Summary field (at the top?) that's editable by people
*** Summary field: should store who wrote what on a per-sentence basis, and add links to each sentence that offers to jump to the post that is associtated with it (can be multiple) to see more details
*** History should be kept so that modifications can be undone by moderators and editing conflicts can be resolved.


## Get started

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
