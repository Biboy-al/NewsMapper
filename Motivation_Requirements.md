# Motivation

## Problem Statement:

I have struggled with keeping up with the news. These are my main problemsthings:

1. The lack of context when reading an article makes me confused.
2. When I deep dive into other articles I end going through a rabbit hole, and loose where I am.
3. I may have obtain bais towards the news because of the lack of context, or the article has a particular bias.

A news arregation site, where choosing one article connects you to past, present, and future articles through a mind mind map visualistion, outlining weather their factual or opinion based. This lets a user derive their own opinions based on the data presented. Additionally for news articles found by the users themselves to be connected with each other, giving a cohesive view of the news being investigated.



## Functional Requirements

| ID  | Requirement | Checklist |
|-----|-------------|---| 
| F1  | The system must have a frontend for users to interact with the articles. | | 
| F2  | The system must collect news articles from multiple sources. | |
| F3  | The system must allow users to create profiles and login. | | 
| F4  | Users must be able to search for topics, keywords, or sources. | | 
| F5  | Users must be able to re-center the mind map by selecting any article. | | 
| F6  | Users must be able to annotate articles or links with personal notes. | | 
| F7  | The system must provide source metadata (publication, date, author). | | 
| F8  | The system must allow users to add their own articles (via link or upload). | | 
| F9  | The system must generate an interactive mind map showing mapping between articles.| | 
| F10 | Users must be able to manually connect articles they believe are related. | | 
| F11 | The system must allow users to navigate and expand/collapse nodes in the mind map. | | 
| F12 | The system must clearly display the classification (factual vs. opinion). | | 
| F13 | The system must determine whether each article is factual or opinion-based. | | 
| F14 | The system must automatically connect related articles. | | 
| F15 | Connections between articles must update dynamically in the visualization. | | 
| F16 | The system must present connected articles and classification data without bias. | | 

## Non-Functional Requirements

| ID   | Requirement | Checklist |
|------|-------------|--|
| NF1  | The interface must be intuitive, with clear visual indicators (e.g., color codes for factual vs. opinion). | | 
| NF2  | The mind map must be smooth and responsive, even with many linked articles. | | 
| NF3  | The system must load search results and visualizations within 2 seconds under normal load. | | 
| NF4  | Adding or linking articles must update the visualization in real time. | | 
| NF5  | The system must handle a growing number of users and articles without performance degradation. | | 
| NF6  | The factual vs. opinion classification must have a target accuracy of at least 85%. | | 
| NF7  | Connections between articles must be consistent and persist after updates. | | 
| NF8  | User data (notes, manually added links) must be stored securely. | | 
| NF9  | The system must validate user-submitted article URLs to prevent malicious input. | | 
| NF10 | The system codebase must be modular to allow updates and improvements. | | 
| NF11 | Documentation must be provided for future developers. | | 
| NF12 | The site must work on major browsers and mobile devices. | | 
| NF13 | The visualization must degrade gracefully on lower-end hardware. | | 
| NF14 | The system must maintain high availability (e.g., 99% uptime). | | 
| NF15 | Critical features must remain operational during minor updates. | | 
