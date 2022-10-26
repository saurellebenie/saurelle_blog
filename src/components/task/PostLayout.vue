<template>
    <section class="post">
        <h3 class="description">- Long form typography exercise - </h3>
        <h1>Hipster Ipsum</h1>
        <p>Dreamcatcher nesciunt pour-over, VHS Schlitz et hella occaecat Wes Anderson put a bird on it quinoa voluptate
            occupy jean shorts. Yr vegan readymade mlkshk, pour-over cornhole fap tempor Wes Anderson direct trade.
            Banjo bicycle rights Godard fingerstache, occupy deep v mollit tote bag raw denim ugh banh mi trust fund
            nisi Williamsburg.</p>
        <p>Fingerstache forage semiotics messenger bag. Retro whatever cardigan stumptown, PBR banh mi mollit. Assumenda
            mumblecore placeat readymade enim irure. Bushwick ullamco gastropub pickled gluten-free, retro post-ironic
            kogi tousled shabby chic photo booth deep v jean shorts fap tattooed. Banksy cray Etsy voluptate, sunt
            pickled DIY irony. American apparel ethnic duis, thundercats locavore 8-bit trust fund shabby chic
            single-origin coffee freegan asymmetrical Truffaut Cosby sweater vinyl ut.
        </p>

        <h2>Title Header 2</h2>
        <p> Literally trust fund yolo, messenger bag kale chips photo booth cray et delectus deep v biodiesel leggings
            cillum shoreditch meh. Meh trust fund four loko, Brooklyn twee post-ironic tousled Vice magna.</p>
        <blockquote>"The best things in life aren't things."</blockquote>

        <p>Hashtag banjo helvetica chambray, occupy you probably haven't heard of them kogi banh mi Carles.
            Intelligentsia Cosby sweater try-hard ullamco, Austin tote bag aliqu.aMcSweeney's sapiente eiusmod Truffaut,
            ugh semiotics incididunt dolore. Pop-up Marfa cred Brooklyn. Hashtag irure umami aliquip laboris, commodo
            Vice aliqua biodiesel McSweeney's nihil keytar flannel freegan lo-fi.</p>

        <figure>
            <img src="https://unsplash.s3.amazonaws.com/batch%206/lighthouse.jpg" alt="Light house"
                class="pic-medium" />
        </figure>

        <p>Hoodie semiotics tousled brunch, eu 3 wolf moon sartorial flannel Wes Anderson 8-bit organic ugh gastropub.
            Kale chips sunt DIY, Terry Richardson commodo id culpa Portland leggings. Culpa assumenda jean shorts, ugh
            readymade lo-fi laborum minim forage sunt 3 wolf moon kale chips aliqua et bicycle rights. Selvage accusamus
            meggings McSweeney's twee cliche gastropub, nisi anim. Sunt in post-ironic mustache sapiente blog
            church-key, Etsy hoodie fanny pack occaecat selfies Austin id quinoa.</p>

        <figure>
            <img src="https://unsplash.s3.amazonaws.com/batch%205/pier.JPG" alt="Pier 2 exports" class="pic-medium" />
        </figure>

        <p>Bitters Tonx mixtape hella four loko. Tofu meggings McSweeney's scenester kitsch, brunch four loko Austin
            dreamcatcher High Life readymade tote bag single-origin coffee. Synth shabby chic High Life butcher iPhone
            cray. Small batch Tonx tumblr, Austin readymade Terry Richardson dreamcatcher Banksy blue bottle hoodie food
            truck kogi Bushwick Odd Future. Church-key chillwave Banksy butcher cardigan.</p>

        <h3 class="thanks">Thanks for viewing!</h3>

    </section>
</template>

<style scoped>
/* HEADER & COPY SIZING */
p {
    font-size: 1em;
    /* 16px */
    font-family: 'Open Sans', sans-serif;
}

h1 {
    font-size: 3.375em;
    /* 54px */
    letter-spacing: -.03em;
}

h2 {
    font-size: 2.25em;
    /* 36px */
}

h3 {
    font-size: 1.5em;
    /* 24px */
    font-style: italic;
}


.post {
    width: 960px;
    padding: 5% 12% 10% 10%;
    background-color: #f4f4f4;
    margin: 0 auto;
    border-right: 1px solid #e4e4e4;
    border-left: 1px solid #e4e4e4;
}

.description {
    text-align: center;
    margin-bottom: 70px;
}

h1,
h2,
h3 {
    margin: 10px 0px;
    font-family: 'Merriweather', serif;
    color: #3d4c5c;
}

p:first-of-type:first-letter {
    font-size: 4em;
    font-weight: bold;
    float: left;
    padding-right: 3px;
}

p:first-of-type:first-line {
    line-height: 1;
}

.post>p {
    padding: 10px 0px 10px 40px;
}

blockquote {
    background-color: #eaeaea;
    font-family: 'Merriweather', serif;
    font-style: italic;
    padding-top: 15px;
    padding-bottom: 15px;
    margin: 12px 0 12px 40px;
    text-align: center;
}

figure {
    margin: 20px 0px;
}

figcaption {
    padding-left: 10px;
}

.pic-medium {
    max-width: 120%;
}

.thanks {
    margin-top: 80px;
    text-align: center;
}
</style>