/* empty css                                 */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DFqYWxzC.mjs';
import 'html-escaper';
import { $ as $$MainLayout } from '../chunks/MainLayout_87NkpzRK.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl">Home Page</h1> <p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ex distinctio modi exercitationem fugiat, pariatur inventore dolorum tempore? Sint consequuntur temporibus neque numquam, accusamus molestiae odit cum placeat aliquam molestias assumenda amet, quisquam porro vero tenetur ad unde laboriosam eveniet aliquid sit. Expedita voluptatibus nobis nemo ipsa labore rerum eligendi quasi fugit facere, odit eos sed aspernatur nulla saepe, amet cumque? Facilis eveniet, ipsam quis repellendus assumenda, sit voluptatem aperiam modi accusamus maxime dolor eaque ullam adipisci tempora. Magnam dignissimos vel ipsam nemo, placeat eos voluptas veniam quibusdam repellat ea? Sequi voluptatum aperiam atque dolor sed explicabo exercitationem quo minus.
</p> ` })}`;
}, "C:/Users/Acer/Proyectos/Astro/proyectos-astros/06-auth/src/pages/index.astro", void 0);

const $$file = "C:/Users/Acer/Proyectos/Astro/proyectos-astros/06-auth/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
