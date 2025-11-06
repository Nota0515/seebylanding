
export default function HomeTrackline() {
    return (
        <div className="relative h-[400vh] w-full max-w-full" >
            <SVG />
        </div>
    )
}


const SVG = () => {
    return (
        <div className="w-full flex overflow-x-hidden sticky -top-50">
            <svg
                viewBox="0 0 1792 437"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full sticky top-0 "
            >
                <path
                    d="M0.546509 1.39233C0.546509 1.39233 552.251 219.924 931.807 210.069C1293.11 200.688 1791.55 1.39233 1791.55 1.39233M0.546509 1.39233C0.546509 1.39233 552.251 219.924 931.807 210.069"
                    stroke="#E574DD"
                    strokeWidth="3" />
                <path
                    d="M0.546509 435.392C0.546509 435.392 552.251 234.636 931.807 243.69C1293.11 252.308 1791.55 435.392 1791.55 435.392M0.546509 435.392C0.546509 435.392 552.251 234.636 931.807 243.69"
                    stroke="#E574DD"
                    strokeWidth="3" />
            </svg>
        </div>
    )
}
