<template>
    <div class="cards">
        <div class="card-single">
            <div>
                <h1 id="customer"></h1>
                <span>likes</span>
            </div>
            <div>
                <span class="material-symbols-outlined">
                    favorite
                </span>
            </div>
        </div>
        <div class="card-single">
            <div>
                <h1 id="project"></h1>
                <span>Posts</span>
            </div>
            <div>
                <span class="material-symbols-outlined">
                    post_add
                </span>
            </div>
        </div>
        <div class="card-single">
            <div>
                <h1 id="order"></h1>
                <span>Comments</span>
            </div>
            <div>
                <span class="material-symbols-outlined">
                    chat
                </span>
            </div>
        </div>
        <div class="card-single">
            <div>
                <h1><sup></sup>
                    <p id="income"></p>
                </h1>
                <span>weekly Views</span>
            </div>
            <div>
                <span class="material-symbols-outlined">
                    visibility
                </span>
            </div>
        </div>
    </div>
    <!-- <video class="video-1" src="https://res.cloudinary.com/liquidtime/video/upload/v1655385934/abstract_fihenv.mp4" loop muted autoplay></video>
    <video class="video-2" src="https://res.cloudinary.com/liquidtime/video/upload/v1655385877/dark_wave_irg2pp.mp4" loop muted
        autoplay></video> -->
</template>
<script>
export default {
    setup() {
        return {
            post: {
                title: '',
                description: '',
            }
        }
    },
}
</script>
<style>
:root {
    --for-heading: #3b026b;
    --main-color: linear-gradient(45deg, #c40051, #ff0066);
    --color-dark: #1d2231;
    --text-grey: #8390a2;
    --dark-BG: #001623;
    --content-BG: #022d47;
    --dark-text: #b200ff;
    --off-white: #f1f5f9;
    --icon-color: #520293;
    --purple: linear-gradient(45deg, #99013e, #7f02ed);
    --pink: linear-gradient(45deg, teal, red);
    --orange: linear-gradient(45deg, #ff9000, #ffd400);
    --moon: linear-gradient(45deg, #ff9000, #7f02ed);
    --moon-only: linear-gradient(45deg, #fff, #7f02ed);
    --sun: linear-gradient(45deg, #ffc700, #8300ff);
    --transition: all 400ms;
    --new-content: rgba(255, 255, 255, .5);
    --indicator: rgba(255, 255, 255, .7)
}

.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.2rem;
    margin-top: 1rem;
    padding: 10px;
    overflow: hidden;
    height: auto;
}

.card-single {
    display: flex;
    justify-content: space-between;
    background: rgba(0, 0, 0, .2);
    backdrop-filter: blur(16px);
    padding: 1.2rem;
    border-radius: 5px;
    /* box-shadow: 0 0 20px rgba(0, 0, 0, .2); */
    overflow: hidden;
    filter: brightness(120%);
    transition: all 400ms;
}

.cards .card-single {
    height: 150px;
}

.card-single:hover {
    transform: scale(1.04);
    border-radius: 25px;
}

.card-single div:last-child span {
    font-size: 3rem;
    background: var(--pink);
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}


.card-single div:first-child span {
    text-transform: uppercase;
    color: #fff;
}

.card-single:hover,
.card:hover,
.light .card {
    background: rgba(0, 0, 0, 0.564);
}

.light .card:hover {
    background: rgba(0, 0, 0, 0.713);
}

.card-single:hover h1,
.card-single:hover div:last-child span {
    filter: brightness(140%);
}

.card-single:hover h1,
.card-single:hover div:last-child span {
    filter: brightness(140%);
}

.recent-grid {
    margin-top: 3.5rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 65% auto;

}

.card {
    	background:#fff;
    /* background: rgba(0, 0, 0, .2); */
    backdrop-filter: blur(16px);
    border-radius: 10px;
}

/* =========COUNTER=========== */
sup,
b {
    background: var(--moon);
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}

@property --num {
    syntax: "<integer>";
    initial-value: 0;
    inherits: false;
}

#customer,
#project,
#order,
#income {
    counter-reset: num var(--num);
}

#customer {
    animation: customer 5s forwards ease-in;
}

#project {
    animation: project 10s forwards ease-in-out;
}

#order {
    animation: order 12s forwards ease-in-out;
}

#income {
    display: inline;
    animation: income 15s forwards ease-in;
}

#income::before,
#customer::before,
#project::before,
#order::before {
    content: counter(num);
    background: var(--moon);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}

.card-single:hover #income,
.card-single:hover #customer,
.card-single:hover #project,
.card-single:hover #order {
    animation-play-state: paused;
}

@keyframes income {
    from {
        --num: 0;
    }

    to {
        --num: 600;
    }
}

@keyframes customer {
    from {
        --num: 0;
    }

    to {
        --num: 1334;
    }
}

@keyframes project {
    from {
        --num: 0;
    }

    to {
        --num: 6969;
    }
}

@keyframes order {
    from {
        --num: 0;
    }

    to {
        --num: 5124;
    }
}

/* =========COUNTER=========== */
</style>