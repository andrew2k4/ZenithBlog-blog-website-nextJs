import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import image from "../../components/ui/andrew.jpg";
import Image from "next/image";
import { Heart, MessageCircle, Share2, UserRoundPlus } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className=" w-full ">
      <div>
        <Image
          src={image}
          alt="image"
          className="w-full object-fill"
          style={{ aspectRatio: 13 / 5 }}
        />
        <div className="flex gap-4 text-white  justify-center -mt-14">
          <div className="rounded-full  bg-slate-500 p-2 opacity-95">
            <MessageCircle className="size-5" />
          </div>

          <Link
            href="/"
            className="flex items-center gap-1 rounded-full bg-slate-500 p-2  text-sm text-medium opacity-95"
          >
            <UserRoundPlus className="size-5" />
            follow
          </Link>
        </div>
      </div>

      <div className=" mt-10 m-auto  w-4/5 ">
        <h1 className="text-3xl font-bold ">
          À la découverte des Bibliothèques React : Un Tour d&apos;Horizon
        </h1>
        <p className="text-xs text-muted-foreground mt-4">
          Posted 23 september 2024
        </p>
        <h3 className="mt-5 text-sm">
          Certainly! Could you please provide more details or context for the
          petite description you are looking for? Are you referring to a
          specific topic, person, place, or something else? This will help me
          tailor the description to your needs.
        </h3>
        {/*avatar*/}
        <div className="flex justify-between items-center mt-5">
          <div className="flex  items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-purple-700 text-sm">Olivia rodriguez</p>
          </div>
          <div className="flex gap-8 items-center text-muted-foreground">
            <Link href="" className="flex items-center gap-1">
              <Heart />
              11
            </Link>

            <Share2 />
          </div>
        </div>
      </div>

      <div id="blog-content" className=" m-auto my-14 w-4/5 text-black">
        <p>
          React, la bibliothèque JavaScript créée par Facebook, a révolutionné
          le développement d&apos;interfaces utilisateur en proposant une
          approche déclarative et composante. Cependant, la force de React ne se
          limite pas à son noyau. De nombreuses bibliothèques tierces, chacune
          apportant sa propre valeur ajoutée, ont émergé pour étendre les
          fonctionnalités de React et simplifier le développement.
        </p>

        <h2 className="text-2xl font-bold my-4">
          1. Redux : Gestion d&apos;État Évoluée
        </h2>

        <p>
          <strong>Redux</strong> est sans doute la bibliothèque d&apos;état la
          plus populaire dans l&apos;écosystème React. Elle introduit un modèle
          unidirectionnel pour la gestion de l&apos;état de l&apos;application,
          facilitant ainsi la prévisibilité et le débogage. Dans l&apos;article,
          nous explorerons les concepts fondamentaux de Redux et expliquerons
          comment il peut être utilisé pour maintenir un état global cohérent
          dans une application React complexe.
        </p>

        <h2 className="text-2xl font-bold my-4">Conclusion</h2>

        <p>
          Les bibliothèques mentionnées ci-dessus ne sont que la pointe de
          l&apos;iceberg de l&apos;écosystème React. À mesure que la communauté
          continue de croître, de nouvelles bibliothèques et outils émergent,
          offrant des solutions innovantes pour les développeurs React. Dans cet
          article, nous avons exploré certaines des bibliothèques les plus
          populaires, mais n&apos;hésitez pas à explorer davantage pour trouver
          celles qui correspondent le mieux à vos besoins spécifiques.
        </p>

        <p>
          Que vous soyez un développeur débutant ou chevronné,
          l&apos;utilisation judicieuse de ces bibliothèques peut grandement
          faciliter le processus de développement, améliorer la maintenabilité
          du code et offrir une expérience utilisateur exceptionnelle.
        </p>
      </div>
    </div>
  );
}
