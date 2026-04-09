I've seen a handful of posts recently that seem to be suggesting full stack developers don't actually exist. Or, in some cases, expressing confusion as to what it means to be a "full-stack developer." While it's increasingly difficult to determine what's spam and what's not, I'm pretty sure these were actual people who actually couldn't seem to grasp this concept.

As someone who has, on occasion, been called a "full-stack developer" and who has no qualms with the terminology, I'm going to try to explain from my perspective in a way that's perhaps less inflammatory than some of my previous comments.

A full-stack developer is a developer who is effectively comfortable performing tasks in any and all parts of the technology stack. Contrary to what appears to be an increasingly popular opinion, such people do exist. More... I don't even think we're particularly uncommon. There are, however, some things which are common among us, at least in my experience. So here's three of traits which I think most full-stack developers have:

### 1. Self-Motivated and Self-Taught

For me personally and in my experience, full-stack developers are largely self-motivated when it comes to technology. We love to learn new things and try new technologies. We **enjoy** writing code. We dread the thought that AI is going to decrease our chances of learning new things, or finding some cool or interesting technique even in a technology we already know. We learned by doing, likely breaking things when we were younger to figure out how they worked.

### 2. We're Highly Analytical Thinkers

While this may be as much a product of our drive and curiosity as it is a cause of it, it's difficult to imagine a full-stack developer without this trait. While all developers and engineers are to a greater or lesser extent analytical thinkers (it comes with the job), most **non**-full-stack developers, in my experience, seem to know when and how to turn off their analytical brain. We have greater difficulty doing so.

### 3. We're A Bit Anarchistic

We don't like rules and boundaries so much. We like breaking them. Rules and boundaries are almost, by definition, what prevents you from connecting all the dots. They're designed to keep people and things siloed and "in their place." That doesn't work well when you're inherently concerned with seeing all the interconnections and how a fully integrated solution can be greater than the sum of all its parts.

## I'm Not a Myth, But I am "Invisible"

I'm not on anybody's radar. I'm a proud generalist who eschews the idea that I need to to memorize hundreds of leet code problems or every data-structure that ever existed to be able to demonstrate that I know how to build solutions. Furthermore, I don't think that type of rote memorization has much at all to do with building effective solutions.

I haven't gotten a credential or certification since I got my A+ and Linux+ somewhere around the age of 17. Instead, I went to B-tier technical school with summer courses, frequently skipping them to hack on my own projects, so I could get an Associates degree in < 2 years. I took "Computer Information Systems" specifically because it was less focused than something like Computer Science.

I worked for a single company for most of my professional career cause it was safe and reliable, and that enabled me to work on my own projects more frequently. And yes... I generally work for far less pay than some of my technical counterparts, in part, because there are things I value far more than money.

Tech companies keep talking about how they want engineers who think outside the box and approach problems in novel ways. Then they engage in rigid hiring practices and shortlist the people who succeeded in only the most recognized (and therefore ossified) institutions. They hire and promote people who conform to absurdly uniform and generally soulless learning pathways and forms of skill expression all while the recruiters they hire tell you that if you just formatted your resume in the acceptable ways, you'd get 10x more offers.

Then, if you do happen to get hired, you're stuck in one of two scenarios. Scenario one is that you're trapped working on some massive enterprise nightmare sifting through the legacy crud and technical debt of the "best in class" who came before. Scenario two is you're chained nearly 60 hours a week to a tech bro start-up because they're going to do something amazing with <insert current tech trend here> and a bunch of cringe VCs on LinkedIn decided to throw money at them.

Oh, sorry, I said I was going to try and be less inflammatory. Refer to Trait #3 in opening paragraphs.

What I'm trying to say is that if you think full-stack developers are a myth, it might be a **you** problem. It might be that you're not going to find them because they don't conform to what you're looking for and even if one stumbled into your interrogation room for an interview, you may well disqualify them in short order.

It stands to reason that someone can't be an expert in everything. I can't have eight years of consistent and always increasing experience with every specific technology on the planet. When I'm working with Postgres or solving data problems, I'm not writing front-end code. When building out AWS infrastructure or testing integration and deployment pipelines, I'm not writing an API. And that's why many of the best full-stack developers will never get a second look. We're "all over the place," and intentionally so. We have shallow knowledge in a broad set of specific technologies and a mix of depth for core technologies that have just persisted through the ages (i.e. stable and "old" not new and shiny). Most importantly, though, we have a Mariana Trench of flexibility, versatility and experience backed by fundamentals which, even if we can't define the way a text-book would, we know them to our bones.

That's how we like it.

### What Do I Do Exactly?

Well, that's just it. I can't tell you what I do exactly, because I don't do an exact thing. I do everything. Now that I'm out of work and working on my own thing (Primd), I've had a lot more time and ability to explore. So, here's what I've been doing, "exactly:"

- Deployed a suite of services to handle basic business operations and provide our cooperative members with basic tools and services including NextCloud, OnlyOffice Documents Server, Authentik for LDAP with OIDC and SAML providers for SSO across all our internal apps. Added Kimai for timetracking and Listmonk for e-mail campaigns.
- Configured Postfix and Dovecot (IMAP) on our AWS stack to integrate with Authentik's LDAP outpost and using Amazon's AWS for outbound relaying for reliable delivery.
- Set up requisite WebRTC services including Janus and Signaling to enable voice/video calling in our NextCloud Talk deployment.
- Deployed and [wrote a library to perform basic Object Graph Mapping for Memgraph](https://github.com/primd-cooperative/fluidgraph/) (our chosen graph database).
- Redesigned, coded (front-end and back-end) and set up deployment infrastructure for [our new website](https://primd.app).
- Extended and added a handful of new features to [my framework](https://hiraeth.dev) to support the work we're doing on the PWA (progressive web application) prototype for Primd.
- Finalized all baseline features for [Velocity](https://github.com/hiraeth-php/velocity), a server-side component framework that enables us to do rapid front-end prototyping with HTMX, AlpineJS, and Tailwind.
- Wrote and integrated docker-based development environment that provides turn-key local development for our app contributors via a simple: `docker compose up`. That includes: Memgraph, Kafka, PHP-FPM, Postgres, Redis, and Caddy.
- Finalized authentication, registration, and basic user profile handling in the app prototype (both front-end and back-end), while developing re-usable server-side components with the aforementioned Velocity stack.
- Restarted local development on my [Nim framework](https://github.com/mattsah/mininim) which will be used to power various API based microservices that need to be fast.
- Started development (not much here yet) on a unified [component documentation system](https://primd.app/docs/velocity/) for the components we're working on specific to Primd that integrates directly into the code-base to keep our front-end development well-documented.

### What's Next?

Tomorrow and Friday I finish the Skills Explorer, writing a handful of new components, developing the documentation more and make sure to get a functional web manifest in place to make the PWA installable. Then next week and early June we start developing the campaign to get local employers and workers introduced to what we're working on. That campaign will have me digging into GIMP and Inkscape to produce various collateral to get printed. Yes, I can do graphic work too, but admittedly I don't have an eye for visual design. Expect subtle branding changed over time.

Is this full-stack enough?
