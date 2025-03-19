import { marked } from "marked"
import parse from 'html-react-parser'

function MarkedParser(props) {

    const raw = props.raw
    const align= props.align
    const data = parse(`<div style="text-align: ${align?align:'start'}">${marked.parse(raw)}</div>`)
    return data
}
  
export default MarkedParser