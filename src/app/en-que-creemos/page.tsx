"use client"

import { motion } from "framer-motion"
import { Book, Cross, Heart, Sparkles, Crown, Shield, User, Church, MessageCircle, Infinity } from "lucide-react"

export default function EnQueCreemosPage() {
  // Colores personalizados del proyecto
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  const doctrinas = [
    {
      titulo: "Acerca de la Biblia",
      icono: Book,
      contenido: "La Palabra de Dios —comúnmente llamada la Biblia— es el mensaje que por su inspiración, Dios ha dado a los hombres, y por lo tanto es infalible en todo lo que afirma. Es además, la única fuente de revelación en materia de doctrina y conducta para todos los tiempos y personas (Éxodo 17.14; Jeremías 1.9; Salmos 119.105,160; 2 Timoteo 1.13, 3.16; 2 Pedro 1.19-21)."
    },
    {
      titulo: "Acerca de Dios",
      icono: Crown,
      contenido: "Dios es eterno, existente en tres personas: Padre, Hijo y Espíritu Santo. Estos tres son iguales y un solo Dios. Dios es el creador del universo, al cual mantiene en equilibrio siguiendo las leyes que él mismo formuló y estableció. Conforme a su propósito de gracia, envió al Señor Jesucristo para salvar a la raza humana (Deuteronomio 6.4; Mateo 28.19; Hebreos 1.5-6; Gálatas 4.4-6 Génesis 1:1, 26, 27; 3:22; Salmos 90:2; Mateo28:19; 1ª Pedro 1:2; II Corintios 13:14)."
    },
    {
      titulo: "Acerca de Jesucristo",
      icono: Cross,
      contenido: "Jesucristo es Dios manifestado en carne, nacido de la virgen María por obra del Espíritu Santo. En su humanidad, Cristo fue verdadero Dios y verdadero hombre. Con su mensaje, maravillas, prodigios y milagros, comunicó la voluntad de Dios para la humanidad, tal como lo narran los cuatro evangelios. Es nuestro único Salvador y Señor. Para tal fin, venció a la muerte siendo crucificado, muerto, sepultado y resucitado al tercer día. Con su obra, pagó a Dios el precio por el rescate del pecado para toda la humanidad. Ascendió al cielo, de donde volverá en forma corporal y visible para arrebatar a los suyos y establecer posteriormente su reino. Jesucristo es el único mediador entre Dios y los hombres, es quien intercede ahora en el cielo a favor de los salvados en calidad de sumo sacerdote o pontífice (Juan 1.1-3, 18, 14.6-9; 1 Pedro 1.18-19; Hechos 2.31; 1 Tesalonicenses 4.13-17; Malaquías 1:22-23; Isaías 9:6; Judas 1:1-5; 14:10-30; Hebreos 4:14-15; 1ª Corintios 15:3-4; Romanos 1:3-4; Hechos 1:9-11; 1 Timoteo 6:14-15; Timoteo 2:13)."
    },
    {
      titulo: "Acerca del Espíritu Santo",
      icono: Sparkles,
      contenido: "El Espíritu Santo es una persona, Dios y posee todos sus atributos. Mora en el interior de todos los que aceptaron a Cristo como Salvador y Señor, regenerándolos y sellándolos en el momento de su conversión. Quienes han confesado todos sus pecados, renunciaron íntegramente a su ayer y gozan de la plenitud de Dios. Es el Espíritu Santo quien capacita a cada miembro del cuerpo de Cristo para que pueda servir en el lugar en que Dios lo ha ubicado. Lo hace otorgándole dones para la bendición, edificación y crecimiento de todo el cuerpo. El Espíritu engendra y conduce la alabanza y la adoración para rendir tributo y gloria aceptable a Dios (Salmos 139.7-10; 1 Pedro 1.11; Juan 15.16; Efesios 5.18-19; Gálatas 5.22-23; II Corintios 3:17; Juan 16:7-13; 14:16,17; Hechos 1:8; 1Corintios 2:12; 3:16; Efesios 1:13; Gálatas 5:25; Efesios 5:18)."
    },
    {
      titulo: "Acerca del Reino de los cielos",
      icono: Crown,
      contenido: "La presencia actual del reino de Dios (o reino de los cielos) en todos los que recibimos al Señor Jesús es real. Por su parte, todos los salvados viven en el reino de Dios. La soberanía de Dios demanda de nosotros sujeción, santificación de vida y gracia para que quienes no conocen a Dios le vean a través nuestro (Jn. 3.3, 5; Hch. 20.25; Ro. 14.17; 1Cor. 4.20; 6.9; Col. 1.13; 1 Tes. 2.12). Tiene vigencia eterna."
    },
    {
      titulo: "Acerca del Reino de las Tinieblas",
      icono: Shield,
      contenido: "La presencia actual del reino de las tinieblas es real y verdadera. Creado por el diablo (que también es Satanás), en el momento que se reveló contra Dios y perdió su perfección. Por su calidad de ser creado y caído, tanto él como sus seguidores, tienen poderes limitados. Su trabajo principal es oponerse a Dios y los suyos, procurando destruir el reino de Dios. En consecuencia, todos los cristianos están en constante lucha con él y sus aliados, para anular sus estrategias y vencer sus ataques, teniendo el desafío de ayudar al prójimo a salir de ese reino, en el que se encuentra desde su nacimiento (Is 14.12-27; Jn 16.11; Ef 6.12; Heb 2.14; 1 Pe 2.9)."
    },
    {
      titulo: "Acerca del ser humano",
      icono: User,
      contenido: "El hombre está hecho a la imagen espiritual de Dios. Para ser como El en carácter. El hombre es el objeto supremo de la creación de Dios. Aunque tiene tremendo potencial para el bien, está manchado por la tendencia de desobedecer a Dios. Esta desobediencia, se llama \"pecado\". El pecado separa a las personas de Dios y causa muchos problemas en la vida. (Gé 1:17; Sal 8:3-6; Is 53:6a; Ro 3:23; Is 59:1,2)."
    },
    {
      titulo: "Acerca de la Salvación",
      icono: Heart,
      contenido: "La Salvación, es el regalo de Dios para nosotros, pero es necesario aceptarlo. No podemos pagar por nuestros pecados, ni con las buenas obras o la superación personal. Sólo al confiar en que Jesucristo es la oferta de Dios para el perdón de nuestros pecados, podemos ser salvos de la penalidad del pecado. Cuando nos volvemos de una vida autocontrolada, a una vida controlada por Cristo, somos salvos. La vida eterna empieza en el momento en que uno recibe a Cristo como su Salvador y Señor de su vida. (Romanos 6:23; Efesios 2:8-9; Juan 14:6; 1:12; Tito 3:5; Gálatas 3:26; Romanos 5:1)."
    },
    {
      titulo: "Acerca de la Iglesia",
      icono: Church,
      contenido: "Entendemos a la Iglesia como una gran familia, donde Dios es el Padre que nos convoca a su mesa. Cada miembro del cuerpo de Cristo (la iglesia), es responsable por perseverar en su comunión personal con el Señor y con los hermanos, como único modo para el avance del evangelio y la extensión del reino de Dios. Siendo glorificar a Dios el objetivo de la iglesia, la conducta santa y la comunión mutua son claves para los logros de ese propósito. El estilo de vida cristiana que responde al ADN que sustenta la Iglesia del Encuentro, incentiva la voluntad unánime de honrar al Señor. Cada uno tiene que esforzarse para utilizar la capacidad con la cual el Espíritu lo ha dotado, a fin de realizar los cambios en su conducta personal (vida íntima), en sus relaciones con la familia, o en sus labores cotidianas que le permitan constituirse en un factor importante para el testimonio dentro y fuera de la iglesia (Ro 12.1-2; Fil 2.2; 1 P 3.16)."
    },
    {
      titulo: "Acerca del Testimonio",
      icono: MessageCircle,
      contenido: "Tenemos una responsabilidad social que está implícita en la labor evangelística. El Señor Jesús manifestó la necesidad de aplicar a nuestro prójimo el amor a Dios. La atención a las necesidades de quienes nos rodean deben motivar el compromiso de la iglesia en las buenas obras. El hambre, la desnudez y la falta de justicia social tienen que movilizar los sentimientos cristianos genuinos de todos los miembros del cuerpo de Cristo (Mateo 19.19; 22.39; Romanos 13.9-10; Gálatas 5.14; 6.10; 1 Timoteo 2.10; 6.18; 2 Timoteo 3.17; Tito 2.14; Santiago 1.27; 2.8, 15; 1 Juan 3.18)."
    },
    {
      titulo: "Acerca de la eternidad",
      icono: Infinity,
      contenido: "Las personas fueron creadas para existir por siempre, existimos separados de Dios por el pecado o unidos eternamente con Dios por su perdón y Salvación. La separación eterna de Dios, es el infierno. El vivir en unión eterna con El, es la vida eterna. El cielo y el infierno son lugares reales para una existencia eterna real. (Juan 2:25; Juan 5:11-13; Romanos 6:23; Apocalipsis 20:15; Mateo 1:8; Mateo 2:44,46)."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Sección principal con banner */}
      <section
        className="min-h-[60vh] flex items-center relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${creamColor} 0%, ${lightViolet} 100%)` 
        }}
      >
        {/* Figuras decorativas de fondo */}
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full animate-pulse"
          style={{ backgroundColor: violetColor, opacity: 0.1 }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-40 h-40 rounded-full animate-pulse"
          style={{ backgroundColor: lightViolet, opacity: 0.4, animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 left-10 w-20 h-20 rounded-full animate-bounce"
          style={{ backgroundColor: violetColor, opacity: 0.2, animationDelay: "2s" }}
        ></div>

        {/* Elementos decorativos adicionales */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
            style={{ backgroundColor: violetColor, opacity: 0.05 }}
          ></div>
          <div 
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full"
            style={{ backgroundColor: lightViolet, opacity: 0.3 }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              {/* Icono decorativo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
                style={{ backgroundColor: violetColor }}
              >
                <Book className="w-10 h-10 text-white" />
              </motion.div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-6"
                style={{ backgroundColor: lightViolet, color: violetColor }}
              >
                <Cross className="w-4 h-4 inline mr-2" />
                EN QUÉ CREEMOS
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
              >
                Estas son las{" "}
                <span style={{ color: violetColor }}>doctrinas básicas</span>{" "}
                de la fe cristiana y principios no negociables en los que creemos.
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de doctrinas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {doctrinas.map((doctrina, index) => (
                <motion.div
                  key={doctrina.titulo}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div 
                    className="p-8 rounded-2xl shadow-lg border-l-4 hover:shadow-xl transition-all duration-300"
                    style={{ 
                      backgroundColor: index % 2 === 0 ? lightViolet : 'white',
                      borderLeftColor: violetColor,
                      borderWidth: '4px'
                    }}
                  >
                    <div className="flex items-start gap-6">
                      {/* Icono */}
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: violetColor }}
                      >
                        <doctrina.icono className="w-6 h-6 text-white" />
                      </div>

                      {/* Contenido */}
                      <div className="flex-1">
                        <h3 
                          className="text-2xl font-bold mb-4"
                          style={{ color: violetColor }}
                        >
                          {doctrina.titulo}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-justify">
                          {doctrina.contenido}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de cierre */}
      <section 
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: creamColor }}
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.4 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Fundamentos sólidos para una{" "}
                <span style={{ color: violetColor }}>fe auténtica</span>
              </h2>
              <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: violetColor }}></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Estas doctrinas fundamentales son el fundamento sobre el cual construimos 
                nuestra fe y nuestra vida en comunidad. Son verdades eternas que nos guían 
                en nuestro caminar con Dios.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 