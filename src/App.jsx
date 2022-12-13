import Section from "./components/Section";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

import "./App.css";

export default function App() {
    const gamesList = [
        {
            url: "https://www.twitch.tv/directory/game/God%20of%20War%20Ragnar%C3%B6k",
            imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/102007682_IGDB-144x192.jpg",
            alt: "Imagem do jogo League of Legends"
        },

        {
            url: "https://www.twitch.tv/directory/game/Far%20Cry%206",
            imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/518692_IGDB-144x192.jpg",
            alt: "Imagem do jogo FarCry 6"
        },

        {
            url: "https://www.twitch.tv/directory/game/Assassin's%20Creed%20Valhalla",
            imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/517330_IGDB-144x192.jpg",
            alt: "Imagem do jogo Assassin's Valhalla"
        },

        {
            url: "https://www.twitch.tv/directory/game/Red%20Dead%20Redemption%202",
            imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB-144x192.jpg",
            alt: "Imagem do jogo Red Dead Redeption"
        },

        {
            url: "https://www.twitch.tv/directory/game/Grand%20Theft%20Auto%20V",
            imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-144x192.jpg",
            alt: "Imagem do jogo Grand the Auto V"
        }
    ];

    const channelList = [
        {
            href: "https://www.twitch.tv/maykbrito",
            imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
            alt: "Imagem de Mayk Brito",
        },

        {
            href: "https://www.twitch.tv/alanzoka",
            imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",
            alt: "Imagem de Alanzoka",
        },

        {
            href: "https://www.twitch.tv/cellbit",
            imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/brksedu-profile_image-8068004d415ba841-70x70.png",
            alt: "Imagemd de BRKsEDU",
        }
    ];

    const socialList = [
        {
            url: "https://www.instagram.com/wesleyalvp/",
            imageUrl: "/assets/instagram.svg",
            alt: "Instagram do Wesley ALves"
        },
        {
            url: "https://github.com/WesleyAlvess",
            imageUrl: "/assets/github.svg",
            alt: "GitHub do Wesley ALves"
        },
        {
            url: "https://www.linkedin.com/in/wesley-alves-pereira-27496920a/",
            imageUrl: "/assets/linkedin.svg",
            alt: "Linkedin do Wesley ALves"
        },
        {
            url: "https://www.facebook.com/wesley.alvespereira.52/",
            imageUrl: "/assets/facebook.svg",
            alt: "Facebook do Wesley ALves"
        },
        {
            url: "https://wesleyalvess.github.io/portifolio/",
            imageUrl: "/assets/portifolio.png",
            alt: "Portifólio do Wesley ALves"
        },
        {
            url: "https://wapereira.netlify.app/",
            imageUrl: "/assets/projetos.png",
            alt: "Projetos do Wesley ALves"
        },
    ]

    return (
        <div className="App">
            <Header />
            <main>
                <Section
                    title="Meus Jogos"
                    subtitle="Os games que eu mais curto jogar!"
                    className="games-list"
                >
                    {gamesList.map((games, key) => (
                        <ListItem
                            key={key}
                            url={games.url}
                            imageUrl={games.imageUrl}
                            alt={games.alt}
                        />
                    ))}

                </Section>

                <Section
                    title="Meus streamers"
                    subtitle="Lista de canais e transmissões que não perco!"
                    className="channel-list"
                >
                    {channelList.map((item, key) => (
                        <ListItem
                            key={key}
                            href={item.href}
                            imageUrl={item.imageUrl}
                            alt={item.alt}
                        />
                    ))}

                </Section>

                <Section
                title= "Minhas Redes"
                subtitle= "Se conecte comigo agora mesmo!"
                className="social-list"
                >

                    {socialList.map((item, key) => (
                        <ListItem 
                        key={key}
                        url={item.url}
                        imageUrl={item.imageUrl}
                        alt={item.alt}
                        />
                    ))}

                </Section>
            </main>
        </div>
    );
}
