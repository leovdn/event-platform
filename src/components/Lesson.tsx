import { isPast, format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { CheckCircle } from "phosphor-react"

interface LessonProps {
  title: string
  slug: string
  availabeAt: Date
  type: "live" | "class"
}

export default function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availabeAt)
  const availableDateFormatted = format(
    props.availabeAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  )

  return (
    <a href="#">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded py-[2px] px-2 text-white border border-green-300">
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </a>
  )
}
