(setq markdown-css-paths ("M:\GitHub\tunein-redesign\custom.css"))

<script src="https://gist.github.com/rxaviers/7360908.js"></script>

# TUNEIN WEB APPLICATION REDESIGN
*A self-directed UX redesign project.*

## Why Redesign TuneIn :radio:?
Meet Maria! Maria finds herself getting distracted by video content, a major chunk of it on YouTube, for hours at length.

Maria is handed a Radio: Eureka!

Audio content happens to be consumable while being engaged- cooking, driving or even working! This understanding initiates her resolution to be more productive and consume content in audio formats henceforth. In her journey towards transitioning from consuming entertainment in the form of video to audio, she lands herself on the [TuneIn website](https://tunein.com/), more than a dozen times, only to find herself never committing to its web browser application.

On a little investigation, she learns that TuneIn aims to be the largest (more than 100,000 radio stations and 4 million podcasts) annotated catalog of live radio programming and on-demand radio from around the world with more than 75 million monthly active users as of 2019. TuneIn works on multiple platforms like voice assistants, home sound systems, multiroom entertainment platforms, Google Play Store, App Store, Microsoft Store, is even integrated with various car models, etc.

Since I'm looking to do a redesign piece for my portfolio, Maria asks me to try redesigning TuneIn to be more empathetic to its users.

She identifies it to be it's most apathetic yet accessible interfaces. And so begins the journey of this redesign of its web browser application.

## Project Plan

In order to identify the pain points and subsequent opportunities for redesign an iterative design process that comprised of the following [activities](ux activities on GitHub) was planned to be carried out within a self-imposed period of a month.

### 1. Research

#### Competitive audit
Popular competitors to TuneIn as listed by web analytics service, SimilarWeb and as per [an interview of the current CEO of TuneIn, John Dunham by Wade Roush, a podcast producer](https://xconomy.com/national/2013/01/11/turning-on-to-live-internet-radio-with-tunein/?single_page=true) are iHeartRadio, Sirius XM, Pandora, Deezer- none of which are available in India, Stitcher, Spotify, SoundCloud, Radio Garden and a few more.

Out of them, the applications selected for the audit were based on:
1. Whether or not they aim to cater to a global user base
2. The closest type of products they offered to TuneIn

TuneIn's business goal is steered to promote streaming live radio on the internet and bringing all of radio from world over on one dial and further solving for discovery.
Several music streaming websites are being considered competitors to TuneIn since music streaming and the new "radio" which are automated playlists have begun to impact the market for Live Radio making it all the more crucial to observe and analyse their pain points and strengths to identify opportunities.

##### Usability- Satisfaction Matrix
![Image of the matrix](link"Usability-SatisfactionMatrix")--
The audit involved plotting the competitor apps across a matrix of usability and satisfaction. We see that although Spotify is higher up in its overall performance which is mainly attributed to its "recommender systems" and its aesthetics, users claim it isn't the most efficient and seamless experience owing to the myriad sections under the Browse panel. Stitcher comes right behind it in usability owing to its "Less is more" approach in organising it's content. Radio Garden with it's unique and minimalist approach to presenting Live Radio remains highly usable lagging behind majorly in its aesthetic element. SoundCloud with its TuneIn scores in it's overall performance as it allows for a large amount of unique content available and it's simplicity but lacks in a big dose of essential functionalities.

##### Feature Matrix
|     | TuneIn | iHeartRadio | Stitcher | Spotify | SoundCloud | Radio Garden |
|---|---|---|---|---|---|---|
Type | Live Radio, Music Streaming, Podcasts | Live Radio, Music Streaming, Podcasts | Podcasts | Music Streaming, Podcasts | Music Streaming | Live Radio
Mandatory Sign In/ Sign Up | | | &#10003; | &#10003; | &#10003; | |
Content and Label | Stations, Podcasts, Events, Shows | Stations, Podcasts, Artist Radio, Playlists | Shows | Playlists, Stations, Podcasts | Playlists | Stations
Categories | By Location, By Language, Music, Sports, News, Talk, Podcasts, Trending, Recent, Local Radio | Recommendations, Recent, Saved, Live Radio by location and genre, Podcasts by genre, Artist Radio Stations by genre, Playlists by moods & activities, decades, featured, genres | By Genres, International, Critically Acclaimed, Popular and Trending, New and Noteworthy | FEATURED>Recommended, Recent, More like .., Editor's pick, Charts, PODCASTS> Thematic, Trending, CHARTS>Featured, Top 50, Viral 50, Genres and Moods>Themes, NEW RELEASES> The best, New albums & Singles, DISCOVER>Recommended, More like .., Editor's pick | By Activity, By Mood, Charts: Trending, Top 50 and more | By location
Navigation | Location, Language, Music, Sports, News, Talk, Podcasts, Trending, Recent, Local Radio, Favourites | For You, Your Library, Live Radio, Podcasts, Artist Radio, Playlists, Genres, News, Features, Events, Contests, Photos | My Front Page, Favourites Playlist, Saved Episodes, Browse Shows | Home, Search, Library, Playlists | Home, Stream, Library | Browse location, Library
Search & Browse | &#10003; | &#10003; | &#10003; | &#10003; | &#10003; | &#10003;
Social Plugins | Share | Share, Like | Share | Share | Like, Plays, Repost, Share, Comment | Share
Profile Page ||||| &#10003; |
Users as content curators || &#10003; || &#10003; | &#10003; |
Progress Bar | &#10003; | &#10003; | &#10003; | &#10003; | &#10003; |
Recommender system from recent plays | &#10003; | &#10003; || &#10003; | &#10003; |
Recently played | &#10003; | &#10003; || &#10003; | &#10003; |
Trending | &#10003; | &#10003; | &#10003; | &#10003; | &#10003; |

#### User Interviews

Users for interviews were identified:
1. Friends via social media who are familiar with TuneIn.
2. Traditional radio users who were open to the idea of engaging with a radio application on a PC.
3. Users that use other apps to listen to live radio.
4. User reviews on their Facebook page.
5. User reviews from a forum called Anime Superhero.

The interview comprised of the users discussing their real/ hypothetic motivation to use the App, how they would go about the usage and what their pain points are. We looked at a page-wise critique of the application generally comprising of its homepage, category page and the final product page.  

The pain points as pointed out by the users verbatim:

##### HOMEPAGE
> *“I don’t use the homepage ever.”*  

> *“Is this live radio?”*

> *"I don't see the Value Proposition."*

> *"But LISTEN to what NOW??""*

##### NAVIGATION
> *"The navigation bar is confusing me."*

> *"It feels pretty easy to use at first."*

##### SEARCH
> *“Where's the search bar?”*  

##### BROWSE
> *“Browsing for stations is very difficult and the listicles presented aren't great either.”*

##### FAVOURITES
> *“Organising the favourites section is not intuitive.”*

> *“I wish I could customize my page and playlists more.”*

> *"Cannot favourite certain episodes from podcasts."*   

##### PRODUCT PAGE
> *"How do I go back to my search results from this station?"*

##### ERROR RECOGNITION
> *"It's neither running with Firefox nor Chrome on Ubuntu. There is some error and I can't fix it."*

#### Unveiling our User Personas
-----

![Profile photo of User Persona-1](link"UserPersona-1,SivaVenkataramanujam")  

Shyam Sreedharan, 56  
*Radio Aficionado*
> *"Me and my wife have always listened to the radio."*  


*Keralite-Indian in Doha, Qatar enjoying retired life, living with his son and wife after his son took a job in Doha.*  
*Speaks Malayalam, Hindi and English.*  
*Spends his time stock market trading, listening to the news and likes 70s-80s Hindi and Malayalam music*  
*Is comfortable using a PC for trading and internet browsing.*  
*Hardly has his phone on him.*

-----

![Profile photo of User Persona-2](link"UserPersona-2,ShreyaNath")

Maria De Rossi, 26  
*Radio cub*  
> *"I like exploring."*  

*Lives in Tennessee*        
*Freelance Graphic Designer.*  
*Workaholic- is always ready to attend to clients.*  
*Speaks Filipino and English.*   
*Interested in exploring Radio and Podcasts.*  
*Addicted to watching stand-up comedy.*  

-----

#### Heuristic Walkthroughs with potential and existing users

Since we are focusing only on the redesign of its web browser application, we shall restrict hypothesising Maria and Shyam engaging with it to indoors i.e., at home, at a work/ co-working place or in certain public spaces as informed by the user research. The personas and research enabled identification of various goals that a user may want to achieve. The tasks involved in achieving the goals shall be evaluated against one among the widely accepted set of heuristics.

Jakob Nielson's heuristics:
1. Visibility of system status
2. Match between system and the real world
3. User control and freedom
4. Consistency and standards
5. Error prevention
6. Recognition rather than recall
7. Flexibility and efficiency of use
8. Aesthetic and minimalist design
9. Help users recognize, diagnose, and recover from errors
10. Help and documentation

Once the violations to these heuristics are identified, they will be given a severity rating.

0 — don’t agree that this is a usability problem  
1 — cosmetic problem  
2 — minor usability problem  
3 — major usability problem; important to fix  
4 — usability catastrophe; imperative to fix  

| | Pain points | Severity | Heuristics Violated | Opportunities |
|--|--|--|--|--|
**Goal 1 (Thematic Search):** Shyam looks for a station that plays 80s rock music and wants to bookmark it. | Cannot browse different stations without moving back and forth on pages. | 3 | User control and freedom | The web-based UI relies on the browser back button to move to previous pages. An in-app feature could be devised.
|| The Search Results have to be scrolled down excessively to browse through the options. Podcasts are also listed below. | 3 | User control and freedom, Aesthetic | White space and  Grids could be utilised for a better layout. Applying the Hick-Hyman Law can help examine how many options should be offered at any part of the website.
|| Difficult to browse for or organise a favourited station among other items. | 3 | Flexibility and efficiency of use | Improved features on the favourites section.
**Goal 2 (Artist Search):** Maria wants to listen to Amy Winehouse | The Search Results show a section called Suggestions(Artist) other than relevant stations, podcasts and episodes of shows. Clicking on "Suggestions" again show relevant stations and Albums. Clicking on "Album" shows you "Songs". Clicking on "Songs" takes you back to the initial Search Result Page. | 4 |  Error prevention | Modifications to its Taxonomy.   It would help if the app does not try to be something that it is not.
**Goal 3 (Search by Location/ Language):** Shyam tries to find 1062 BIG FM (Malayalam, UAE) but identifies it as BIG FM | Searching for BIG FM does not shows resulst from world over and does not support further discivery within the results. Hence, By Location or by Language searches do not have Search options within those categories and it is frustrating to click on every category to check if the required station is there within the category. Also does not show the station if searched by Language. | 5 |  Error prevention, Flexibility and efficiency of use, User control and freedom | Selection of location and language not does not utilise an efficient input controls. Keeping input control elements consistent.
|| Mystery meat problem with most of its links |

### 2. Making sense of it all a.k.a. Problem Definition

#### Information Architecture

This round of formative research helps in identification of complications primarily in Navigation, Search and Discovery.

##### Taxonomy and Semantics

### card Sort
The taxonomy is aligned with its business goals, hence credible. However, certain flows do indicate missing/ erroneous tags which will need to be flagged and raised with the data collection and developer teams if this were a real-time project.

Global Semantics used on the page work well. However, semantics used on regional categories are not on par and carry the scope of another project utilising extensive regional resources in itself.  

##### *“Is this live radio?”*: Redesigning Navigation, Search and Discovery

The Key Insights derived from potential users indicated ineffective communication of a unique value proposition for users in the Homepage. The Navigation menus also contributed to confusion in the spectrum of products offered by the application.
As a result, there is a requirement to clarify that the 2 types of products offered are Live Radio and On-Demand Radio (otherwise known as Podcasts) and support that with a USP in the Info page during on-boarding.

For the sake of Search and Discovery however, the products have been divided into 4 categories based on their attributes:
1. Live Radio: Name, Production, Currently playing
2. Podcasts: Name, Production
3. Events: Name, Description, Station, Date, Timing
4. Shows: Name, Station

Each kind of product offered is further categorised based on various user-friendly categories and also the genre of content.

The overall scope of this redesign is thus mostly confined to the features that come under the gamut of Navigation, Search and Discovery.

#### Feature Prioritisation

What this activity attempts to do is prioritise features based on desirability and feasibility in terms of technical overhaul and time or viability in terms of business goals.

1. Customised Homepage instead of a standardised Homepage
2. Taxonomy
3. Navigation tab
3. Search within certain categories- favourites, language, location
4. Social Plugins- Like, Plays, Share, Comment
5. Recommender system
6. Organising the favourites sections
7. Favouriting episodes from shows/Podcasts
8. To previous pages- breadcrumbs??
9. Error diagnosis
11. Users as content curators
12. Profile Page and Feed
13. Notifications for newly released episodes from stations you have favorited
14. An interactive introduction of key app features during the onboarding flow may also be helpful for new users.
15. An efficient layout
16. Revising input controls

![2 X 2 Feature Prioritisation Matrix](link"2X2FeaturePrioritisationMatrix")

### 3. Churning out the design

#### User Scenarios

User scenarios have been designed to incorporate  exploratory and explicatory user-flows of a first-time user to share the on-boarding flow and that of a seasoned user going about advanced functionalities respectively to capture the span of possible scenarios.

1. Maria who has been looking for new ways to entertain herself is recommended to listen to Podcasts on TuneIn by a friend.(socail media aspect)

![ handrawn wireframes- user flow-1](link"2X2FeaturePrioritisationMatrix")

2. Shyam tries to find an item within his favourites section.

![handrawn wireframes-User flow-2](link"2X2FeaturePrioritisationMatrix")

####  Pattern Library

https://www.underconsideration.com/brandnew/archives/new_logo_for_tunein.php

#### Digital Wireframes





#### Prototypes

### 4. Evaluation
#### Usability testing
####  Before and After

#### KPIs
Ideally, a baseline evaluation must anchor itself on ceratain KPIs (Key Performance Indicators) in order to be able to compare its improvement in performance after a redesign.
???????????????KPIs (Key Performance Indicators) such as “time on site” and “page views” can be analysed to understand if applying Hick’s law has proved serviceable.
And hence, I assume the application's redesign would contribute to the site measuring up better to its KPIs (Key Performance Indicators).
If we are to consider the conversion rates for the web application. Although the quantity of the lead does not ensure sustainability, you also want ot ensure quality of the lead. Marketing Quaifoed Leads MQL, Sales Qualified Leads SQL.
[Brand Guidelines](https://www.underconsideration.com/brandnew/archives/new_logo_for_tunein.php)
July, 2019??????????????

### 5. Learnings
user feedback makes work more streamlined.



## Tools used:
* [Adobe Xd](link)
* [Figma](link)
* [Markdown](link)
* [HTML5](link)			
* [CSS3](link)		
* [Agile Methodology](link)
* [Design Thinking](link)

People that helped you along the always
pictorial
n users that I contacted via social media and forums who cooperated with me for my research.

https://app.flowmapp.com/projects/74183/sitemap/#1446115
https://www.leanplum.com/blog/app-engagement-tunein/
https://www.animesuperhero.com
