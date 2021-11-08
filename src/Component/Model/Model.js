import './Model.css'
import ReactDOM from 'react-dom'

export default function Model({ children, handleClose, isSalesModel }) {
    return ReactDOM.createPortal((
        <div className="model-backdrop">
            <div className="model" style={{ 
                border: "4px solid", 
                borderColor: isSalesModel ? "#ff4500" : "#555",
                textAlign: "center"
            }}>
                {children}
                <button 
                    onClick={handleClose} 
                    className={isSalesModel ? "sales-btn": "" }
                >
                    Close
                </button>
            </div>
        </div>
    ), document.body)
}