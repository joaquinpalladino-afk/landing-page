"use client";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState, useMemo, useCallback } from "react";
import { Toaster, toast } from "react-hot-toast";

// Props del componente Hero
interface HeroProps {
  dictionary: any;
  onSubmit?: (email: string) => Promise<void>;
}

/**
 * Hero Component
 *
 * Este componente renderiza la sección principal de la página de aterrizaje.
 * Incluye un formulario de registro para acceso anticipado.
 *
 * @param {HeroProps} props - Las propiedades para configurar el componente.
 * @param {object} [props.dictionary] - El objeto de diccionario para la internacionalización.
 * @param {Function} [props.onSubmit] - Una función para manejar el envío del formulario de correo electrónico.
 *
 * @example
 * // Para usar este componente y reemplazar la imagen del mockup:
 * // 1. Coloca tu imagen (por ejemplo, `my-mockup.png`) en la carpeta `public`.
 * // 2. Pasa la ruta de la imagen a la prop `mockupImage`.
 * <Hero mockupImage="/my-mockup.png" />
 *
 * // Para manejar la suscripción de correo electrónico:
 * // Pasa una función asíncrona a la prop `onSubmit`.
 * const handleSubscribe = async (email) => {
 *   // Lógica para enviar el correo electrónico a tu API
 *   console.log(`Email submitted: ${email}`);
 *   // Muestra un toast o feedback al usuario
 * };
 * <Hero onSubmit={handleSubscribe} />
 */
const Hero = ({ dictionary, onSubmit }: HeroProps) => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = useMemo(() => dictionary.hero, [dictionary]);
  const isEmailValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), [email]);
  const isButtonDisabled = !isEmailValid || !agreed || loading;

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    setLoading(true);
    toast.loading("Enviando...", { id: "loading" });

    try {
      if (onSubmit) {
        await onSubmit(email);
      }
      toast.success("¡Gracias por suscribirte!", { id: "loading" });
      setEmail("");
      setAgreed(false);
    } catch (error) {
      toast.error("Hubo un error. Inténtalo de nuevo.", { id: "loading" });
    } finally {
      setLoading(false);
    }
  }, [email, agreed, loading, isButtonDisabled, onSubmit]);

  return (
    <>
      <Toaster position="bottom-center" />
      <section className="relative w-full bg-[#0B1520] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[rgba(21,97,147,0.28)] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-8 lg:px-24 pt-10 pb-20 lg:pt-24 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Columna Izquierda: Contenido de Texto y Formulario */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-gray-300 bg-gray-800/50 border border-gray-700 rounded-full">
                {t.badge}
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter whitespace-pre-wrap">
                {t.title}
              </h1>

              <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-[#BFC9CF]">
                {t.subtitle}
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-10 max-w-lg mx-auto lg:mx-0"
                aria-label="Formulario de acceso anticipado"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative w-full">
                    <label htmlFor="email-input" className="sr-only">
                      {t.emailPlaceholder}
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full h-14 px-6 bg-[#2E3135] placeholder:text-gray-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#156193]"
                      required
                      aria-required="true"
                      aria-invalid={!isEmailValid}
                      aria-describedby="email-error"
                    />
                    {!isEmailValid && email.length > 0 && (
                      <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                        Por favor, introduce un correo electrónico válido.
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isButtonDisabled}
                    className="w-full sm:w-auto h-14 px-8 rounded-lg bg-[#156193] text-white font-semibold shadow-lg transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:bg-sky-700 hover:enabled:shadow-xl hover:enabled:transform hover:enabled:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B1520] focus:ring-[#156193]"
                    aria-label="Solicitar acceso anticipado"
                  >
                    {loading ? "Enviando..." : t.ctaButton}
                  </button>
                </div>

                <div className="mt-5 flex items-center space-x-3">
                  <Checkbox.Root
                    id="c1"
                    checked={agreed}
                    onCheckedChange={() => setAgreed(!agreed)}
                    className="flex h-5 w-5 appearance-none items-center justify-center rounded-[4px] bg-[#2E3135] outline-none focus:ring-2 focus:ring-[#156193]"
                    aria-labelledby="checkbox-label"
                  >
                    <Checkbox.Indicator className="text-white">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label
                    id="checkbox-label"
                    htmlFor="c1"
                    className="text-sm text-[#BFC9CF]"
                  >
                    {t.checkboxLabel.part1}
                    <a href="#" className="underline hover:text-white">
                      {t.checkboxLabel.link1}
                    </a>
                    {t.checkboxLabel.part2}
                    <a href="#" className="underline hover:text-white">
                      {t.checkboxLabel.link2}
                    </a>
                    {t.checkboxLabel.part3}
                  </label>
                </div>
              </form>
            </div>

            {/* Columna Derecha: Mockup de la Aplicación */}
            <div className="lg:col-span-5 flex justify-center items-center animate-float">
              <div className="relative w-[90%] max-w-md lg:max-w-none aspect-[16/10] bg-[#1C2A3A] rounded-xl border border-gray-700/50 shadow-[0_30px_60px_rgba(8,20,34,0.65)] p-2 transition-transform duration-300 hover:scale-105">
                <div className="h-full w-full bg-[#0B1520] rounded-md overflow-hidden">
                  {/* Placeholder para la imagen del producto */}
                  <div className="flex flex-col h-full p-4 space-y-3">
                    <div className="w-full h-16 bg-gray-700/50 rounded-md animate-pulse"></div>
                    <div className="w-3/4 h-10 bg-gray-700/50 rounded-md animate-pulse"></div>
                    <div className="w-full h-24 bg-gray-700/50 rounded-md animate-pulse"></div>
                    <div className="w-5/6 h-10 bg-gray-700/50 rounded-md animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute top-2 left-4 flex space-x-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;