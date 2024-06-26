---
title: "Hines App Dev"
date: "2021 - 2024"
summary: "Designing and developing software used for management of $90b in assets."
longSummary: "At Hines I've been responsible for building out full stack web applications at scale. Which are used internally for management of over $90b in assets. Here are some of the standout projects and features I've contributed to."
url: "https://hines.com/properties"
tags: ["Web Development", "Design", "Branding", "UI/UX", "Django", "Next.js"]
---

<Alert>
    The following projects are private and internal, so unfortunately I'm unable
    to show live demos or code specifics. However, I'll do my best to provide a
    high level overview of the projects and my role in them!
</Alert>

### About Hines

Hines is a leading global real estate investment manager. We own and operate $93.2 billion¹ of assets across property types and on behalf of a diverse group of institutional and private wealth clients. Every day, our 5,000 employees in 30 countries draw on our 65-year history to build the world forward by investing in, developing, and managing some of the world’s best real estate.

<LinkPreview
    title="Hines"
    imageUrl="https://images.unsplash.com/photo-1529369901324-74af323b49c8?q=80&w=3820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    description="Hines is a leading global real estate investment manager. Learn more about the firm here."
    link="https://hines.com/about"
/>

## A Fresh New Approach

When I joined the team at Hines, I saw an opportunity to improve the user experience of our flagship app. Despite the app's potential and its hundreds of active users, the existing design was outdated and the branding was inconsistent.

I took the initiative to redesign the app from the ground up, introducing a new design system and a fully fledged UI/UX redesign. The new design was modern, clean, and consistent, and could be applied to other applications. It was well received by the users and the stakeholders.

<Image
    src="/projects/hines/cover.png"
    alt="design"
    width={1458}
    height={761}
    contained
    size="lg"
/>

### Introducing Figma

As part of the redesign process, I introduced Figma as a design tool to the team. Starting with a fresh empty canvas, I built components from scratch, and began defining our new color palette, typography, and iconography. This was crucial to have our app look less like a Bootstrap 4 template and more like a custom commercial application.

<Image
    src="/projects/hines/design.png"
    alt="design"
    width={1458}
    height={761}
    size="lg"
/>

Training the team on how to use Figma helped us to collaborate better and completely changed the way we design and develop applications. It also removed the need for us to hire contractors for design work, making our process more efficient and cohesive.

<Image
    src="/projects/hines/dashboard.png"
    alt="dashboard"
    width={1462}
    height={1108}
    size="lg"
    caption="Building an entirely new dashboard, elevating the user experience and allowing our users to work more efficiently."
/>

### Introducing React and Next.js

Initially, our team used Django for data management and workflows in several applications. As our team and applications grew, we faced limitations with Django's Jinja templating system, especially regarding interactivity and user experience.

When tasked with building a new application, I chose to use Next.js for the front end while keeping Django for the backend <span className="text-tertiary">(having used in hobby projects)</span>. This combination allowed us to retain Django's server-side rendering and performance benefits while enhancing interactivity and user experience with React's features. The benefits were immediate:

-   **Component-Based Architecture**: React's encapsulated components simplify complex UIs and make code predictable and debuggable.
-   **Hybrid Rendering**: Allows us to choose between server-side rendering, static site generation, and client-side rendering based on the use case.
-   **Performance**: Next.js's optimized build process and automatic code splitting improve performance and SEO.
-   **Developer Experience**: React's declarative syntax and component-based architecture make development faster and more enjoyable.
-   **Community and Resources**: React's large developer community and abundant resources provide readily available solutions.

---

## The Global Data Hub App

The global data hub or GDH is our flagship application. It's used by hundreds of users and groups across different company regions and is responsible for outlining the very structure of the companies investment pipeline.

All the way from initial project proposal, voting, funding, and closing of the deal. What started as a single CRUD workflow for the real estate investment pipeline has grown into a full fledged data management platform.

<Image
    src="/projects/hines/table.png"
    alt="tables"
    width={1408}
    height={927}
    contained
/>

<Image
    src="/projects/hines/nav.png"
    alt="nav"
    width={1408}
    height={927}
    contained
/>

<Image
    src="/projects/hines/form.png"
    alt="form"
    width={1408}
    height={927}
    contained
/>

## Koko: Our new AI platform

With the advent of AI and machine learning, we saw an opportunity to improve our data management and analysis capabilities. I was tasked with building a new platform that will hold a collection of AI models and tools that can be used by our team to from public-facing content generation to internal data analysis.

Since AI is a complex topic in itself, I emphasized the importance of and intuitive user experience and simplicity in the design. This is something that I believe [OpenAI](https://openai.com) did an amazing job with their ChatGPT product design.

<Image
    src="/projects/hines/login.png"
    alt="og"
    width={2267}
    height={1280}
    contained
    size="lg"
/>

<Image
    src="/projects/hines/list.png"
    alt="lists"
    width={2267}
    height={1280}
    contained
    size="lg"
/>
