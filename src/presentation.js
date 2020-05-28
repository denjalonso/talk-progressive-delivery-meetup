// @ts-check
// Import React
import React from 'react';

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Layout,
  Fit,
  Fill,
  S
} from 'spectacle';
import createTheme from './theme/index';
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-graphql';
import './style.css';
import { colors } from './theme/colors';

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} progress="bar" transition={[]} transitionDuration={0}>
        <Slide>
          <Heading size={2}>
            <S type="bold" textColor={colors.blue.base}>
              Progressive delivery
            </S>
          </Heading>
          <Text>Beyond the Canary 😜</Text>
          <Text margin="100px 0 0 0">
            Denis Alonso{' '}
            <Link href="https://twitter.com/denjalonso" title="@denjalonso" />
          </Text>
        </Slide>

        {/*Agradecer a Romen la invitación, a cloudbees el patrocinio del grupo y a Mymoid la infrastructura */}

        <Slide bgColor="slategray">
          {/*Quien soy, donde he trabajado, repos (link) y slides (link)*/}
          <Image
            src={require('./images/arte-logo.png')}
            height={50}
            margin="0px auto 40px"
          />
          <Image
            src={require('./images/treexor-logo.png')}
            height={50}
            margin="0px auto 40px"
          />
          <Image
            src={require('./images/social-noise-logo.jpg')}
            height={50}
            margin="0px auto 40px"
          />
          <Image
            src={require('./images/mymoid-logo.jpeg')}
            height={50}
            margin="0px auto 40px"
          />
        </Slide>

        {/*(pregunta trampa) No soy perfil infrastructura ...¿Quien tiene perfiles dedicados a debops?  */}

        <Slide>
          <Text>
            DevOps, CI, CD, .... and now what?
          </Text>
        </Slide>

        {/*teníamos CI, CD pero los rollbacks ..., monitorizamos los 500, no juegues con la pasta, mucha desconfianza*/}

        <Slide>
          <Text>Wait!!!!! The problem ...</Text>
        </Slide>

        {/*Pongan en estos tres puntos todos los problemas que nos encontramos diariamente,
        queremos nueva funcionalidad lo más rápido posible y con la mayor confianza */}
        <Slide>
          <Heading size={2}>Why??</Heading>
          <List>
            <ListItem>Many features</ListItem>
            <ListItem>The faster the better</ListItem>
            <ListItem>knowledge in a single person -> bottleneck</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>

        {/*Desde mi ivory tower todo lo que quieran, recomiendo esta charla de yeray darias que habla del tema*/}

        <Slide>
          <Heading size={3}>The solution </Heading>
          <List>
            <ListItem>
              <Link
                title="Microservices"
                href="https://www.youtube.com/watch?v=c5krRqYNY4c/"
              />
            </ListItem>
            <ListItem>Kubernetes</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>

        <Slide>bla, bla, bla .... buzzwords</Slide>

        <Slide>
          <Text>@pinfraProfile +</Text>
          <Image
            src="https://d1.awsstatic.com/AWS-Management-Console/Polaris%20Console%20Home%20GovCloud.9dd6191a5e8940b5d3ab16d46fb71173e44658a8.png"
            height={200}
          />
          <Text>=</Text>
          <Image
            src="https://media.giphy.com/media/5s9OEypb2JPj2/giphy.gif"
            height={200}
          />
        </Slide>

        <Slide>an alternative?</Slide>

        <Slide>
          <Image
            src="https://media.giphy.com/media/yR4xZagT71AAM/giphy.gif"
            height={300}
          />
        </Slide>

        <Slide>but... where is the new?</Slide>

        <Slide>
          <Heading size={2}>Git + Ops = GitOps</Heading>
        </Slide>

        <Slide
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `
              };
            }
          ]}
          bgColor="slategray"
        >
          <Image src={require('./images/kat.png')} margin="0px auto 40px" />
          <Heading size={1}>Wait what?</Heading>
        </Slide>

        <Slide>
          <Text>This isn't a kubernetes meeting, but...</Text>
          <Text>
            GitOps and kubernetes are closly related (iac + git + sda (software
            delivery automation)).
          </Text>
          <Text>And now, a bit of kubernetes and microservices ...</Text>
        </Slide>

        <Slide>
              <Link
                  title="Mymo-cli"
                  href="https://github.com/technoactivity/mymo-cli"
              />
        </Slide>

        <Slide>
          <Image src="https://eksworkshop.com/images/servicemesh-deploy1.png" />
        </Slide>

        <Slide>
          <Text>
            <strong>GitOps</strong> is a way to do Kubernetes cluster management
            and application delivery. It works by using Git as a single source
            of truth for declarative infrastructure and applications. With Git
            at the center of your delivery pipelines, developers can make pull
            requests to accelerate and simplify application deployments and
            operations tasks to Kubernetes.
          </Text>
        </Slide>

        <Slide>
          <Heading size={1}>🎣</Heading>
        </Slide>

        <Slide>
          In summary, it's a way to do continuous delivery. I`ll show you how it
          works ....
        </Slide>

        <Slide>
          <Image
            src="https://eksworkshop.com/images/weave_flux/gitops_workflow.png"
            margin="0px auto 40px"
          />
        </Slide>
        <Slide>
          <Heading size={3}>In practice</Heading>
        </Slide>

        <Slide>
          <BlockQuote>The boss: "the application doesn`t work!!!"</BlockQuote>
          <Image
            src="https://media.giphy.com/media/1FMaabePDEfgk/giphy.gif"
            margin="0px auto 40px"
          />
        </Slide>

        <Slide>
          <Image
            src="https://media.giphy.com/media/l1J9O7pA2mdnrtMgU/giphy.gif"
            height={200}
          />
          <JsCode>{`
            git pull

            git log --oneline

            git revert HEAD
               # Save the commit message

            git log --oneline

            git push

          `}</JsCode>
        </Slide>

        <Slide>
          <Heading size={3}>More things... debug...</Heading>
          <List>
            <ListItem>Tracing with xray</ListItem>
            <ListItem>logging with elastic, fluentd, kibana</ListItem>
            <ListItem>monitoring using prometheus y grafana</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading fit>Nice!</Heading>
          <Text>but ... and the tests?</Text>
        </Slide>

        <Slide>
            <Link
                title="Aws cdk"
                href="https://docs.aws.amazon.com/cdk/latest/guide/home.html"
            />
        </Slide>

        <Slide>
          <Heading heading={1}>Progressive delivery</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>Deployment Strategies</Heading>
          <List>
            <ListItem>Canary Release (progressive traffic shifting)</ListItem>
            <ListItem>
              A/B Testing (HTTP headers and cookies traffic routing)
            </ListItem>
            <ListItem>Blue/Green (traffic switching)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Text>
            {/*to clasify canary concept*/}
            <Link
              title="Canary release"
              href="https://martinfowler.com/bliki/CanaryRelease.html"
            />
            is a technique to reduce the risk of introducing a new software
            version in production by slowly rolling out the change to a small
            subset of users before rolling it out to the entire infrastructure
            and making it available to everybody. -- Martin Fowler
          </Text>
        </Slide>

        <Slide>
          <Text>
            <Heading size={4}>Progressive delivery</Heading>
            is the next step after Continuous Delivery where new versions are
            deployed to a subset of users and are evaluated in terms of
            correctness and performance before rolling them to the totality of
            the users and rolled back if not matching some key metrics
          </Text>
        </Slide>
        <Slide>
          Continuous Delivery is hard, Progressive Delivery makes Continuous
          Delivery easier to adopt
        </Slide>
        <Slide>
          <Heading size={3}>
            Install aws App Mesh, Prometheus and flagger
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3}>Flagger</Heading>
          <Link title="flagger.app" href="https://flagger.app/" />
          <Text>
            Automates the promotion of canary deployments by using app mesh's
            traffic shifting and Prometheus metrics to analyse the application's
            behaviour during a controlled rollout
          </Text>
        </Slide>
        <Slide>
          <Heading size={3}>Canary (progressive traffic shifting)</Heading>
          <Image
            src="https://raw.githubusercontent.com/weaveworks/flagger/master/docs/diagrams/flagger-canary-steps.png"
            margin="0px auto 40px"
          />
        </Slide>

        <Slide>in practice</Slide>

        <Slide>
          <Image
            src="https://raw.githubusercontent.com/weaveworks/flagger/master/docs/diagrams/flagger-canary-overview.png"
            margin="0px auto 40px"
          />
        </Slide>

        <Slide>
          <Heading size={2}>How to improve this?</Heading>
        </Slide>

        <Slide>
          {/*they are the promouters*/}
          <Link
            title="Jenkins X"
            href="https://www.youtube.com/watch?v=A_fM2noPyLk&feature=youtu.be"
          />
          <List>
            <ListItem>Cluster management</ListItem>
            <ListItem>Bot (chatOps)</ListItem>
            <ListItem>Helm</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3}>coming soon 😞</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>DevOps fatigue?</Heading>
        </Slide>

        <Slide>
          <Heading>Questions?</Heading>
          <Heading size={5} margin="40px 0 0 0">
            @denjalonso
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

const JsCode = ({ children, ...other }) => (
  <CodePane lang="javascript" source={children} {...other} />
);

const CssCode = ({ children, ...other }) => (
  <CodePane lang="css" source={children} {...other} />
);

const JsxCode = ({ children, ...other }) => (
  <CodePane lang="jsx" source={children} {...other} />
);

const Link = ({ href, title }) => (
  <a href={href} target="_blank">
    {title || href}
  </a>
);
