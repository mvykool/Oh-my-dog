/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, _ as __astro_tag_component__, b as renderComponent, d as addAttribute, e as renderHead, f as renderSlot } from '../astro.a1f05a76.mjs';
import 'html-escaper';
import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { TfiMenu } from 'react-icons/tfi';

const $$Astro$8 = createAstro();
const $$Cards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Cards;
  return renderTemplate`


${maybeRenderHead($$result)}<div class="lg:flex lg:flex-wrap lg:justify-evenly lg:mx-5">

    <!--card 1 -->
    <div class="bg-[var(--main)] w-[50vw] lg:w-[15vw] mx-auto  my-5 rounded-lg flex flex-col justify-center hide hover:scale-110 duration-150 cursor-pointer">
      <img src="/gromming.png" alt="gromming" class="h-16 w-16 p-2 rounded-full bg-blue-400 mx-auto my-5">

      <h3 class="text-lg text-[var(--darker)] font-semibold mx-auto">Pet Grooming</h3>

      <p class="text-xs my-3 text-[var(--dark)] mx-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quidem?</p>
  </div>

<!--card 2 -->
<div class="bg-[var(--main)] w-[50vw] lg:w-[15vw] mx-auto  my-5 rounded-lg flex flex-col justify-center hide hover:scale-110 duration-150 cursor-pointer">
  <img src="/vet.png" alt="gromming" class="h-16 w-16 p-2 rounded-full bg-red-400 mx-auto my-5">

  <h3 class="text-lg text-[var(--darker)] font-semibold mx-auto">Veterinary</h3>

  <p class="text-xs my-3 text-[var(--dark)] mx-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, </p>
</div>
<!--card 3-->
<div class="bg-[var(--main)] w-[50vw] lg:w-[15vw] mx-auto  my-5 rounded-lg flex flex-col justify-center hide hover:scale-110 duration-150 cursor-pointer">
<img src="/food.png" alt="gromming" class="h-16 w-16 p-2 rounded-full bg-purple-400 mx-auto my-5">

<h3 class="text-lg text-[var(--darker)] font-semibold mx-auto">Food & Snacks</h3>

<p class="text-xs my-3 text-[var(--dark)] mx-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. quidem?</p>
</div>
<!--card 4-->
<div class="bg-[var(--main)] w-[50vw] lg:w-[15vw] mx-auto  my-5 rounded-lg flex flex-col justify-center hide hover:scale-110 duration-150 cursor-pointer">
<img src="/toys.png" alt="gromming" class="h-16 w-16 p-2 rounded-full bg-orange-400 mx-auto my-5">

<h3 class="text-lg text-[var(--darker)] font-semibold mx-auto">Toys</h3>

<p class="text-xs my-3 text-[var(--dark)] mx-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
</div>
</div>`;
}, "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/components/Cards.astro");

const $$Astro$7 = createAstro();
const $$FlipCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$FlipCard;
  return renderTemplate`

${maybeRenderHead($$result)}<div class="lg:flex lg:flex-wrap lg:justify-evenly lg:mx-5 lg:mt-[-5%]">

<!-- card 1 -->

<div class="flip-card md:h-[30vh] lg:w-[15vw] cursor-pointer hide">
  <div class="flip-card-inner">
    <div class="flip-card-front bg-[var(--main)] rounded-lg ">
      <img src="vet1.jpg" alt="Avatar" class="w-[90%] h-[60%] flex justify-center mx-auto rounded-lg mt-5">

      <p class="mt-5">John Doe</p>
    </div>


    <div class="flip-card-back rounded-lg pt-10">
      <p class="my-2 text-xl font-bold mx-8  border-b-2 border-[var(--primary)]">Veterinarian</p>
      <p class="text-sm mt-5">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>
</div>


<!-- card 2 -->

<div class="flip-card md:h-[30vh] lg:w-[15vw] cursor-pointer hide">
<div class="flip-card-inner">
  <div class="flip-card-front bg-[var(--main)] rounded-lg ">
    <img src="vet2.jpg" alt="Avatar" class="w-[90%] h-[60%] flex justify-center mx-auto rounded-lg mt-5">

    <p class="mt-5">Maria Rodriguez</p>
  </div>


  <div class="flip-card-back rounded-lg pt-10">
    <p class="my-2 text-xl font-bold mx-8  border-b-2 border-[var(--primary)]">Veterinarian</p>
    <p class="text-sm mt-5">Lorem ipsum dolor sit amet consectetur.</p>
  </div>
</div>
</div>

<!-- card 3 -->

<div class="flip-card md:h-[30vh] lg:w-[15vw] cursor-pointer hide">
  <div class="flip-card-inner">
    <div class="flip-card-front bg-[var(--main)] rounded-lg ">
      <img src="groomer.jpg" alt="Avatar" class="w-[90%] h-[60%] flex justify-center mx-auto rounded-lg mt-5">

      <p class="mt-5">Ayo Donsumeuo</p>
    </div>


    <div class="flip-card-back rounded-lg pt-10">
      <p class="my-2 text-xl font-bold mx-8  border-b-2 border-[var(--primary)]">Groomer</p>
      <p class="text-sm mt-5">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>
</div>

  <!-- card 4 -->

  <div class="flip-card md:h-[30vh] lg:w-[15vw] cursor-pointer hide">
    <div class="flip-card-inner">
      <div class="flip-card-front bg-[var(--main)] rounded-lg ">
        <img src="groomer2.jpg" alt="Avatar" class="w-[90%] h-[60%] flex justify-center mx-auto rounded-lg mt-5">
  
        <p class="mt-5">Sarika Saanvi</p>
      </div>
  
  
      <div class="flip-card-back rounded-lg pt-10">
        <p class="my-2 text-xl font-bold mx-8  border-b-2 border-[var(--primary)]">Groomer</p>
        <p class="text-sm mt-5">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  </div>
</div>`;
}, "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/components/FlipCard.astro");

const $$Astro$6 = createAstro();
const $$Plans = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Plans;
  return renderTemplate`

${maybeRenderHead($$result)}<div class="block md:justify-center md:flex md:mx-auto md:space-x-3">

<!--plan 1 -->

<div class="bg-[var(--primary)] md:w-[20vw] lg:hover:scale-105 cursor-pointer duration-75 mt-10 rounded-lg hide">
    <div class="flex justify-center">
        <h2 class="my-5 text-lg text-[var(--dark)] font-semibold">Regular Plan</h2>
    </div>

   <div class="flex justify-center">
    <ul class="text-xs text-[var(--dark)]">
        <li>- Lorem, ipsum.</li>
        <li>- Lorem, ipsum dolor.</li>
        <li>- ipsum.</li>
        <li>- assumenda</li>
        <li>- Lorem, ipsum dolor.</li>
        <li>- ipsum.</li>
        <li>- assumenda</li>
        <li>- Lorem, ipsum.</li>
        <li>- Lorem, ipsum dolor.</li>
        <li>- ipsum.</li>
    </ul>
   </div>

    <h1 class="text-red-400 flex justify-center mt-5 text-2xl">$5.90</h1>

    <div class="flex justify-center">
        <button class="cursor-pointer  text-white bg-red-400 hover:bg-red-600 duration-100 p-2 rounded-lg my-5">Select Plan</button>
    </div>
</div>

<!--plan 2 -->

<div class="bg-red-400 md:w-[20vw] lg:hover:scale-105 cursor-pointer  mt-10 rounded-lg hide">
    <div class="flex justify-center">
        <h2 class="my-5 text-lg text-[var(--main)] font-semibold">Premium Plan</h2>
    </div>

   <div class="flex justify-center">
    <ul class="text-xs text-[var(--main)]">
        <li>- Lorem, ipsum.</li>
        <li>- Lorem, ipsum dolor.</li>
        <li>- ipsum.</li>
        <li>- assumenda</li>
        <li>- Lorem, ipsum dolor.</li>
        <li>- ipsum.</li>
        <li>- assumenda</li>
        <li>- Lorem, ipsum.</li>
        <li>- Lorem, ipsum dolor.</li>
        <li>- ipsum.</li>
    </ul>
   </div>

    <h1 class="text-[var(--dark)] flex justify-center mt-5 text-2xl">$9.90</h1>

    <div class="flex justify-center">
        <button class="cursor-pointer  text-[var(--main)] bg-[var(--dark)] hover:bg-[var(--darker)] p-2 rounded-lg my-5">Select Plan</button>
    </div>
</div>

<!--plan 3 -->

<div class="bg-[var(--darker)] md:w-[20vw] lg:hover:scale-105 cursor-pointer  mt-10 rounded-lg hide">
    <div class="flex justify-center">
        <h2 class="my-5 text-lg text-[var(--main)] font-semibold">Golden Plan</h2>
    </div>

   <div class="flex justify-center">
    <ul class="text-xs text-[var(--main)]">
        <li>- Lorem, ipsum.</li>
        <li>- Lorem, ipsum dolor.</li>
        <li>- ipsum.</li>
        <li>- assumenda</li>
        <li>- Lorem, ipsum dolor.</li>
        <li>- ipsum.</li>
        <li>- assumenda</li>
        <li>- Lorem, ipsum.</li>
        <li>- Lorem, ipsum dolor.</li>
        <li>- ipsum.</li>
    </ul>
   </div>

    <h1 class="text-red-400 flex justify-center mt-5 text-2xl">$14.90</h1>

    <div class="flex justify-center">
        <button class="cursor-pointer  text-white bg-red-400 hover:bg-red-600 duration-100  p-2 rounded-lg my-5">Select Plan</button>
    </div>
</div>
</div>`;
}, "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/components/Plans.astro");

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "top-to-btm",
    children: [" ", showTopBtn && /* @__PURE__ */ jsx(FaAngleUp, {
      className: "icon-position icon-style",
      onClick: goToTop
    }), " "]
  });
};
__astro_tag_component__(ScrollToTop, "@astrojs/react");

const MenuModal = ({
  setMenu,
  menu
}) => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "fixed w-full bg-wrapper z-[20] top-0 left-0 h-screen",
      onClick: () => setMenu(false)
    }), /* @__PURE__ */ jsxs("div", {
      className: " bg-[var(--secondary)] scrollLock right-0 z-50 h-[100vh] top-0 w-60 fixed menu",
      children: [/* @__PURE__ */ jsx("div", {
        className: "flex justify-center pt-8",
        children: /* @__PURE__ */ jsx("img", {
          src: "/hero.png",
          alt: "logo",
          className: "h-28 w-28"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "mt-28 ml-5",
        children: /* @__PURE__ */ jsxs("ul", {
          className: "mt-1 ml-8",
          children: [/* @__PURE__ */ jsxs("li", {
            className: "flex space-x-2 my-4",
            children: [/* @__PURE__ */ jsx("img", {
              src: "/logo.png",
              alt: "logo",
              className: "h-5 w-5 rotate-12"
            }), /* @__PURE__ */ jsx("a", {
              href: "/#service",
              onClick: () => setMenu(false),
              className: " text-base font-semibold text-[var(--dark)]",
              children: "Services"
            })]
          }), /* @__PURE__ */ jsxs("li", {
            className: "flex space-x-2 my-4",
            children: [/* @__PURE__ */ jsx("img", {
              src: "/logo.png",
              alt: "logo",
              className: "h-5 w-5 rotate-12"
            }), /* @__PURE__ */ jsx("a", {
              href: "/#about",
              onClick: () => setMenu(false),
              className: " text-base font-semibold text-[var(--dark)]",
              children: "About us"
            })]
          }), /* @__PURE__ */ jsxs("li", {
            className: "flex space-x-2 my-4",
            children: [/* @__PURE__ */ jsx("img", {
              src: "/logo.png",
              alt: "logo",
              className: "h-5 w-5 rotate-12"
            }), /* @__PURE__ */ jsx("a", {
              href: "/#team",
              onClick: () => setMenu(false),
              className: " text-base font-semibold text-[var(--dark)]",
              children: "Team"
            })]
          }), /* @__PURE__ */ jsxs("li", {
            className: "flex space-x-2 my-4",
            children: [/* @__PURE__ */ jsx("img", {
              src: "/logo.png",
              alt: "logo",
              className: "h-5 w-5 rotate-12"
            }), /* @__PURE__ */ jsx("a", {
              href: "/#plans",
              onClick: () => setMenu(false),
              className: " text-base font-semibold text-[var(--dark)]",
              children: "Prices"
            })]
          }), /* @__PURE__ */ jsxs("li", {
            className: "flex space-x-2 my-4",
            children: [/* @__PURE__ */ jsx("img", {
              src: "/logo.png",
              alt: "logo",
              className: "h-5 w-5 rotate-12"
            }), /* @__PURE__ */ jsx("a", {
              href: "/contact",
              className: " text-base font-semibold text-[var(--dark)]",
              children: "Contact us"
            })]
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "w-full border-t-2 border-[var(--dark)] absolute bottom-0 flex justify-center",
        children: /* @__PURE__ */ jsx("h3", {
          className: "text-[var(--dark)] p-3 text-xs",
          children: "Oh My Dog v1.01"
        })
      })]
    })]
  });
};
__astro_tag_component__(MenuModal, "@astrojs/react");

const MenuMobile = () => {
  const [menu, setMenu] = useState(false);
  if (typeof window !== "undefined") {
    let body = window.document.body;
    if (menu === true) {
      body.classList.add("overflowHidden");
      body.classList.add("overflowHidden");
    } else if (menu === false) {
      body.classList.remove("overflowHidden");
      body.classList.remove("overflowHidden");
    }
  }
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("button", {
      onClick: () => setMenu(true),
      children: /* @__PURE__ */ jsx(TfiMenu, {
        className: "h-5 w-5 mt-3 text-[var(--darker)]"
      })
    }), menu ? /* @__PURE__ */ jsx(MenuModal, {
      setMenu,
      menu
    }) : null]
  });
};
__astro_tag_component__(MenuMobile, "@astrojs/react");

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="flex justify-between md:justify-around items-center px-3 bg-[var(--main)] fixed top-0 w-screen z-50 shadow-sm md:h-16">
    <a href="/" class="flex space-x-2 items-center">
        <img src="/logo.png" alt="logo" class="h-7 w-7">
        <p class="text-sm mt-3 text-[var(--dark)] lg:font-bold lg:mt-1">Oh My Dog</p>
    </a>

    <!--desktop view -->

    <div class="hidden md:flex space-x-5 md:items-center mt-3">
        
        <a href="/#service" class=" text-base font-semibold text-[var(--dark)] lg:text-sm lg:hover:bg-[var(--dark)] hover:text-[var(--main)] rounded-lg p-1 duration-150">Services</a>
        
        <a href="/#about" class=" text-base font-semibold text-[var(--dark)] lg:text-sm lg:hover:bg-[var(--dark)] hover:text-[var(--main)] rounded-lg p-1 duration-150">About us</a>
    

        <a href="/#team" class=" text-base font-semibold text-[var(--dark)] lg:text-sm lg:hover:bg-[var(--dark)] hover:text-[var(--main)] rounded-lg p-1 duration-150">Team</a>
      
        <a href="/#plans" class=" text-base font-semibold text-[var(--dark)] lg:text-sm lg:hover:bg-[var(--dark)] hover:text-[var(--main)] rounded-lg p-1 duration-150">Prices</a>

        <a href="/contact" class=" text-base font-semibold text-[var(--dark)] lg:text-sm lg:hover:bg-[var(--dark)] hover:text-[var(--main)] rounded-lg p-1 duration-150">Contact us</a>
    </div>

    <div class="mt-3 hidden md:block">
        <button class="bg-red-400 text-white p-1 rounded-lg hover:scale-110 duration-200">+1 9090909</button>
    </div>

        <!-- menu mobile -->
<div class="md:hidden">  
    ${renderComponent($$result, "MenuMobile", MenuMobile, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/components/MenuMobile", "client:component-export": "default" })}
</div>


</nav>`;
}, "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/components/Header.astro");

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`

${maybeRenderHead($$result)}<section class="lg:bg-[var(--primary)]">

<footer class="flex justify-around p-2 space-x-2 mt-20 lg:mt-28 lg:pt-8">
    <!--block 1 -->
   <div>
       <div class="flex space-x-2 items-center hide">
           <img src="/logo.png" alt="logo" class="h-7 w-7 mt-[-10px]">
           <p class="text-base text-[var(--darker)] hide lg:text-lg">Oh My Dog</p>
       </div>
       <p class="text-[var(--dark)] text-xs w-28 lg:w-[20vw] ml-4 hide">Lorem ipsum dolor sit amet consect adipisicing elit. consequatur!</p>
   
   </div>
   
   
   <!--block 2 -->
   <div>
       <h1 class="text-base text-[var(--darker)] hide">Address</h1>
       <ul class="text-xs text-[var(--dark)] w-20 lg:w-[20vw] hide">
           <li class="lg:my-2">
           123 fake street, London, UK
           </li>
           <li class="lg:my-2">fake@gmail.com</li>
           <li class="lg:my-2">+1 9090909</li>
       </ul>
   </div>
   
   <!--block only with big screen -->
   <div class="hidden lg:block">
       <h1 class="text-base text-[var(--darker)] hide">Links</h1>
       <ul class="text-xs text-[var(--dark)] w-20 md:w-[20vw] hide">
           <li class="lg:my-2">
           Services
           </li>
           <li class="lg:my-2">About</li>
           <li class="lg:my-2">Team</li>
           <li class="lg:my-2">Prices</li>
           <li class="lg:my-2">Contact</li>
       </ul>
   </div>
   
   <!--block 3 -->
   
   <div>
       <h1 class="text-base text-[var(--darker)] hide">Opening Hours</h1>
       <ul class="text-xs text-[var(--dark)] w-20 mx-auto lg:w-[20vw]  hide"><li class="lg:my-2">
           Mon-Tue: 09:00 - 17:00
           </li>
           <li class="lg:my-2">
           Wed-Thu: 10:00 - 16:00
           </li>
           <li class="lg:my-2">
           Sat-Sun: 11:00 - 16:00
           </li>
       </ul>
   </div>
   </footer>
   
   
   <h1 class="text-base text-[var(--darker)] border-t-2 border-[var(--dark)] p-2 lg:justify-center lg:flex mt-5 hide">Subscribe to our Newsletter!</h1>
   
   
   <div class="flex p-5 lg:justify-center">
       <input type="text" placeholder="Email" class="w-36 lg:w-auto hide rounded-{-lg p-1">
   <button class="text-xs text-white bg-red-400 hover:bg-red-600 rounded-r-lg p-1 hide">Subscribe</button>
   
   </div>
</section>`;
}, "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/components/Footer.astro");

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/logo.png">
		<link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
	${renderComponent($$result, "Header", $$Header, {})}
		${renderSlot($$result, $$slots["default"])}
	${renderComponent($$result, "Footer", $$Footer, {})}
	</body></html>`;
}, "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/layouts/Layout.astro");

const $$Astro$2 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`



${renderComponent($$result, "Layout", $$Layout, { "title": "Oh My Dog" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="loader"></div><main>
      <!-- hero section -->
        
	  <section class="block lg:flex lg:flex-row-reverse lg:mt-16 lg:justify-center lg:mx-auto">

		<!--main img -->
		<div class="flex mx-10 mt-10 lg:mt-1">
			<img src="/hero.png" alt="hero" class="w-[80vw] lg:w-auto mx-auto h-[50vh] hide">
		</div>

		<!--main text -->
		<div class="lg:mt-10">

		<div class="flex flex-col mx-8 mt-14 hide">
			<h1 class="font-bold text-[var(--darker)] text-2xl lg:text-4xl mx-8 text-center border-[var(--primary)] border-b-2">For Your Best Friend Care</h1>
			<p class="my-5 text-sm text-[var(--dark)] text-center mx-4 lg:w-[30vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, cumque.</p>
		</div>

		<div class="my-4 flex justify-center space-x-2 hide">
			<button class="bg-red-400 py-2 px-4 rounded-lg text-white lg:px-2 lg:text-sm lg:hover:bg-red-600 hover:scale-110 duration-200">Our services</button>
			<button class="bg-[var(--dark)] py-2 px-4 rounded-lg text-white lg:px-2 lg:text-sm lg:hover:bg-[var(--darker)] hover:scale-110 duration-200">Appointments</button>
		</div>
		</div>
	  </section>

	</main><section id="service" class=" mx-10 lg:mx-[15%] relative mb-10 pb-10 flex-col justify-center mt-36 bg-[var(--secondary)] rounded-lg">
		<div class="flex flex-col">
			<small class="mx-auto hide mt-8 mb-2 text-[var(--dark)]">We take care of pets</small>
			<h1 class="font-bold text-[var(--darker)] text-2xl mx-8 mb-4 text-center hide">What Do We Do?</h1>
		</div>
            
		 ${renderComponent($$result, "Cards", $$Cards, {})}
		 
	  </section><section id="about" class="my-20 flex flex-col justify-center mx-10 lg:flex lg:flex-row lg:mt-20 lg:justify-center lg:mx-auto">
	
		<div>
			<div class="flex flex-col mx-8 mt-14">
				<h1 class="font-bold text-[var(--darker)] text-xl lg:text-2xl mx-8 text-center border-[var(--primary)] border-b-2 hide">About Us</h1>
				
				<p class="my-5 text-sm text-[var(--dark)] text-center hide lg:w-[30vw]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim maiores eos cumque assumenda dolorum ut repellendus veritatis voluptatum facere quis, laborum quam tempore blanditiis accusantium laboriosam cumque assumenda dolorum ut repellendus veritatis voluptatum facere quis, laborum .</p>
			</div>
	
			<ul class="mt-1 ml-8 hide">
				<li class="flex space-x-3 my-2">
					<img src="/logo.png" alt="logo" class="h-5 w-5 rotate-12">
					<p class=" text-sm text-[var(--dark)]">Lorem, ipsum.</p>
				</li>
				<li class="flex space-x-3 my-2">
					<img src="/logo.png" alt="logo" class="h-5 w-5 rotate-12">
					<p class=" text-sm text-[var(--dark)]">veritatis voluptatum</p>
				</li>
				<li class="flex space-x-3 my-2">
					<img src="/logo.png" alt="logo" class="h-5 w-5 rotate-12">
					<p class=" text-sm text-[var(--dark)]">laborum quam tempore</p>
				</li>
				<li class="flex space-x-3 my-2">
					<img src="/logo.png" alt="logo" class="h-5 w-5 rotate-12">
					<p class=" text-sm text-[var(--dark)]">consectetur</p>
				</li>
			</ul>
		</div>

		<div class="flex mx-2 mt-5">
			<img src="/hero2.png" alt="hero" class="mx-auto lg:w-[25vw] hide">
		</div>

	 </section><section id="team" class=" mx-10 lg:mx-[15%]  relative mb-10 pb-10 lg:pb-1 flex-col justify-center mt-36 bg-[var(--secondary)] rounded-lg">
		<div class="flex flex-col">
			<small class="mx-auto mt-8 mb-2 hide text-[var(--dark)]">Only the best</small>
			<h1 class="font-bold text-[var(--darker)] text-2xl mx-8 mb-4 lg:mb-1 text-center hide ">Our Team</h1>
		</div>
            
		 ${renderComponent($$result, "FlipCard", $$FlipCard, {})}
		 
	  </section><section id="plans" class=" mx-10 lg:mx-[15%]  relative mb-10 pb-10 flex-col justify-center mt-36">
		<div class="flex flex-col">
			<h1 class="font-bold text-[var(--darker)] text-xl lg:text-2xl mx-8 text-center border-[var(--primary)] border-b-2 hide">Select One Of Our Plans</h1>
		</div>
            
		 ${renderComponent($$result, "Plans", $$Plans, {})}
		 
	  </section><section class=" mx-10 lg:mx-[15%] lg:flex lg:flex-row relative mb-10 pb-10 flex-col justify-center bg-[var(--secondary)] rounded-lg">
		<div class="mt-10">
			<div class="flex flex-col mx-8">
				<h1 class="font-bold text-[var(--darker)] text-xl lg:text-2xl mx-8 text-center mt-8 hide">Professional Pet Care</h1>
				
				<p class="my-5 hide text-sm text-[var(--dark)] lg:w-[30vw] text-center lg:text-left ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. repellendus veritatis assumenda dolorum ut repellendus veritatis voluptatum facere quis, laborum.</p>
			</div>
	
			<div class="flex hide justify-center lg:justify-start lg:ml-10 mt-4">
				<a href="/contact" class="text-white bg-red-400 rounded-lg p-2 hover:scale-110 hover:bg-red-600 duration-200">Contact us</a>
			</div>
		</div>
		
		<div class="flex mx-2 mt-5">
			<img src="/hero3.png" alt="hero" class="mx-auto md:w-[25vw] hide">
		</div>


	  </section>${renderComponent($$result, "ScrollTop", ScrollToTop, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/components/ScrollTop", "client:component-export": "default" })}` })}`;
}, "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/pages/index.astro");

const $$file$2 = "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const Goback = () => {
  function backButton() {
    window.history.back();
    window.scrollTo(0, 0);
  }
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("button", {
      children: /* @__PURE__ */ jsx(RiArrowLeftSLine, {
        onClick: backButton,
        className: "bg-[var(--dark)] text-white h-12 w-12  p-2 border-2 border-white rounded-full absolute top-20 left-4 hover:scale-110 duration-100 cursor-pointer"
      })
    })
  });
};
__astro_tag_component__(Goback, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`


${renderComponent($$result, "Layout", $$Layout, { "title": "Oh My Dog | Contact" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="loader"></div><main>
        <!-- hero section -->
          
        <section>
          <div class="flex mx-10 mt-10">
            ${renderComponent($$result, "Goback", Goback, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/components/Goback", "client:component-export": "default" })}
              <img src="/hero.png" alt="hero" class=" mx-auto h-[20vh] hide lg:mt-10">
          </div>
  
          <div class="flex flex-col mx-8 mt-14 hide">
              <h1 class="font-bold text-[var(--darker)] text-2x md:text-4xl mx-8 text-center border-[var(--primary)] border-b-2">Contact us</h1>
          </div>
  
         
        </section>

        <section class="bg-[var(--app-col)] p-10 flex justify-center md:w-[70vw] md:mx-auto">
    <form class=" relative md:top-5 flex flex-col justify-center p-3 md:w-[35vw] hide">
        <label class=" w-20 font-semibold rounded-md flex my-4 text-[var(--dark)]">Name</label>
        <input type="text" name="name" id="name" placeholder="Your Name" class="p-2 rounded-md outline-none">
        <label class=" w-20 font-semibold rounded-md flex  my-4 text-[var(--dark)]">Email</label>
        <input type="text" name="email" id="email" placeholder="Email Address" class="p-2 rounded-md outline-none">
        <label class=" w-20 font-semibold rounded-md flex p-1 my-4 text-[var(--dark)]">Message</label>
        <input type="text" name="message" id="message" placeholder="Message" class="px-2 pt-2 pb-36 rounded-md outline-none">
        <button class="my-5 rounded-md cursor-pointer bg-[var(--dark)] text-white font-bold p-1 hover:bg-[var(--darker)] hover:scale-105 duration-300" type="submit" value="send">Submit</button>
    </form>
    </section>
  
      </main>` })}`;
}, "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/pages/contact.astro");

const $$file$1 = "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/pages/contact.astro";
const $$url$1 = "/contact";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`


${renderComponent($$result, "Layout", $$Layout, { "title": "Oh My Dog | error" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="loader"></div><section class="mt-10">
        <div class="flex mx-10 mt-10">
			<img src="/hero.png" alt="hero" class=" mx-auto lg:mt-10 h-[30vh] hide">
		</div>
       <div class="flex justify-center">
        <h1 class="text-2xl mt-28 lg:mt-10 text-[var(--dark)]">Page Not Found</h1>
       </div>
    <div class="flex justify-center mt-10 pb-10">
        <a href="/" class="p-2 bg-red-400 hover:bg-red-600 hover:scale-110 duration-200 text-white rounded-lg">Go back to the main page</a>
    </div>
    </section>` })}`;
}, "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/pages/404.astro");

const $$file = "/home/maicol/Desktop/OMD/Oh-my-dog/oh-my-dog/src/pages/404.astro";
const $$url = "/404";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };
