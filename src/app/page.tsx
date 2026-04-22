"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Globe, Leaf } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Products",          id: "products"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Luton Tea"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient"}}
      title="Experience the Art of Premium Tea"
      description="Luton Tea delivers the finest hand-harvested leaves directly to your cup. Discover unparalleled quality and timeless tradition in every brew."
      kpis={[
        {
          value: "20+",          label: "Rare Varieties"},
        {
          value: "100%",          label: "Organic Certified"},
        {
          value: "10k+",          label: "Happy Connoisseurs"},
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Explore Our Premium Blends",          href: "#products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-pretty-young-woman-sitting_171337-17103.jpg"
      imageAlt="Luxury tea presentation"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-with-mug-kitchen_23-2148334735.jpg",          alt: "Customer 1"},
        {
          src: "http://img.b2bpic.net/free-photo/handsome-male-having-cup-coffee_23-2148392273.jpg",          alt: "Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/man-green-shirt-blurred-home-decor_23-2148401374.jpg",          alt: "Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/woman-holding-tea-cup-front-view_23-2149967028.jpg",          alt: "Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-sitting-indoor-urban-cafe_158595-666.jpg",          alt: "Customer 5"},
      ]}
      avatarText="Joined by 10,000+ tea lovers"
      marqueeItems={[
        {
          type: "text",          text: "Ethically Sourced"},
        {
          type: "text",          text: "Direct from Origin"},
        {
          type: "text",          text: "Sustainable Farming"},
        {
          type: "text",          text: "Master Blended"},
        {
          type: "text",          text: "Premium Grade"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "Our Legacy of"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/sunset-terraced-rice-fields_23-2152006044.jpg",          alt: "Tea fields"},
        {
          type: "text",          content: "Purity and Flavor"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Hand-Harvested Quality",          description: "Each leaf is selected for peak flavor and freshness.",          imageSrc: "http://img.b2bpic.net/free-photo/agriculture-hilltribe-women_1150-7361.jpg",          imageAlt: "Leaf details"},
        {
          title: "Artisan Brewing Process",          description: "Traditional techniques preserve the natural essence of every batch.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-female-barista-hands-pouring-filter-coffee-into-cup-preparing-order-cafe-client_1258-131785.jpg",          imageAlt: "Brewing process"},
        {
          title: "Curated Tasting Experiences",          description: "Explore unique flavor profiles crafted for the true tea enthusiast.",          imageSrc: "http://img.b2bpic.net/free-photo/coffee-cups-beans-international-coffee-day-concept_1150-25415.jpg",          imageAlt: "Tea flight"},
      ]}
      title="Why Luton Tea Stands Out"
      description="We obsess over quality from the moment of harvest to your first sip."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          brand: "Luton",          name: "Heritage Earl Grey",          price: "£18.00",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-vector/premium-mandala-cards-gold-black_1017-8499.jpg"},
        {
          id: "p2",          brand: "Luton",          name: "Ceremonial Matcha",          price: "£25.00",          rating: 5,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/matcha-tea-cup-with-powder_23-2148378892.jpg"},
        {
          id: "p3",          brand: "Luton",          name: "Silver Needle White",          price: "£22.00",          rating: 4,
          reviewCount: "64",          imageSrc: "http://img.b2bpic.net/free-photo/colorful-aroma-tea-cups-arranged-circular-position-wooden-desk_23-2148091985.jpg"},
        {
          id: "p4",          brand: "Luton",          name: "High Mountain Oolong",          price: "£30.00",          rating: 5,
          reviewCount: "42",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-golden-tin-can-kitchen-counter_23-2148785191.jpg"},
        {
          id: "p5",          brand: "Luton",          name: "Morning Blend",          price: "£15.00",          rating: 5,
          reviewCount: "210",          imageSrc: "http://img.b2bpic.net/free-photo/cup-tea-cookies-christmas-beel-wooden-board-high-quality-photo_114579-35826.jpg"},
        {
          id: "p6",          brand: "Luton",          name: "Jasmine Pearls",          price: "£20.00",          rating: 5,
          reviewCount: "98",          imageSrc: "http://img.b2bpic.net/free-photo/water-with-dried-herbs-cup-wooden-table-high-angle-view_176474-6768.jpg"},
      ]}
      title="Our Curated Selections"
      description="From robust black teas to delicate white infusions, find your perfect match."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "50+",          title: "Tea Regions",          description: "Sourced globally",          icon: Globe,
        },
        {
          id: "m2",          value: "12",          title: "Annual Awards",          description: "Industry recognition",          icon: Award,
        },
        {
          id: "m3",          value: "98%",          title: "Sustainability",          description: "Eco-friendly farming",          icon: Leaf,
        },
      ]}
      title="Impact in Numbers"
      description="Our commitment to excellence translates into real-world satisfaction."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "The Daily Sip",        "London Tea Journal",        "Global Gastronomy",        "Luxury Living",        "EcoBrew Weekly",        "Tea & Tradition",        "Culinary Arts"]}
      title="Trusted by Tea Lovers Globally"
      description="Partnering with the world's most discerning culinary institutions."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The depth of flavor in every Luton tea leaf is truly unmatched. It has transformed my daily ritual into a moment of pure bliss."
      rating={5}
      author="Sarah M."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/senior-woman-drinking-coffee-gathering_23-2149230382.jpg",          alt: "Sarah M"},
        {
          src: "http://img.b2bpic.net/free-photo/red-hair-woman-holds-armudu-glass-with-black-tea-restaurant_141793-2094.jpg",          alt: "Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/woman-enjoying-her-relaxation-ritual_23-2150936357.jpg",          alt: "Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-young-woman-drinking-tea-coffee-shop_1301-3425.jpg",          alt: "Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/elderly-woman-taking-coffee_23-2148116375.jpg",          alt: "Customer 5"},
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",          title: "How should I store my tea?",          content: "Keep your tea in a cool, dark, and dry place in our airtight tins."},
        {
          id: "f2",          title: "Are your teas organic?",          content: "Yes, every batch is certified organic and ethically sourced."},
        {
          id: "f3",          title: "Do you offer shipping?",          content: "We ship globally with eco-friendly packaging materials."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/frame-herbal-tea-with-chalkboard_23-2148555464.jpg"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Have questions about our teas? We have the answers."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Let's Connect"
      title="Ready to Experience Luton Tea?"
      description="Get in touch for wholesale inquiries or personalized tea recommendations."
      buttons={[
        {
          text: "Contact Us",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Luton Tea"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Sustainability",              href: "#"},
          ],
        },
        {
          title: "Shop",          items: [
            {
              label: "Tea Collection",              href: "#products"},
            {
              label: "Accessories",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}