import { useState } from "react"
import onecardURL from "/onecard.jpg"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card"
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogDescription } from "./ui/dialog"
import { Input } from "./ui/input"
import { Camera } from "lucide-react"
import BarcodeScanner from "react-qr-barcode-scanner"

interface InputFormProps {
    barcodeVal: string;
    setBarcodeVal: (value: string) => void;
}

export const Input_Form = ({ barcodeVal, setBarcodeVal }: InputFormProps) => {
    const [tempInputVal, setTempInput] = useState<string>(barcodeVal)
    // State for barcode scanner modal
    const [scannerOpen, setScannerOpen] = useState(false)
    const [stopStream, setStopStream] = useState(false)

    const checkStorage = () => {
        if (tempInputVal !== barcodeVal) {
            localStorage.setItem("barcode", tempInputVal)
            setBarcodeVal(tempInputVal)
        }
    }

    // Handler for scan result
    const handleScanUpdate = (_err: any, result: any) => {
        if (result && result.text) {
            setStopStream(true)
            setBarcodeVal(result.text)
            setScannerOpen(false)
            setTimeout(() => setStopStream(false), 500)
        }
    }

    // Handler if user closes scanner, apply workaround for camera stream bug
    const handleScannerClose = () => {
        setStopStream(true)
        setTimeout(() => {
            setScannerOpen(false)
            setStopStream(false)
        }, 100)
    }

    return (
        <Card className='w-[350px] sm:w-[450px] md:w-[800px]'>
            <CardHeader>
                <CardDescription className="text-md">
                    <p>
                        A faster way to get into the Burdick gym without logging in...
                    </p>
                    <b>Over and over again</b>.
                    <p>
                        Generate a barcode based on the number above the barcode on your TU OneCard and store it locally on your device via <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">local storage</a>.
                    </p>
                    <p>It's <a href="https://github.com/curlyLasagna/scanfast">open source</a> if you'd like to contribute.
                    </p>
                    <p></p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div>
                        <div className='flex flex-col space-y-1.5'>
                            <div className='flex flex-row items-center gap-2'>
                                <Input 
                                    type="number" 
                                    value={tempInputVal}
                                    onChange={(e) => setTempInput(e.target.value)} 
                                    required
                                />
                                <Button 
                                    type="button" 
                                    variant="outline" 
                                    size="icon" 
                                    aria-label="Open barcode scanner"
                                    onClick={() => setScannerOpen(true)}
                                >
                                    <Camera />
                                </Button>
                            </div>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button type="button" variant="ghost" className="px-0">
                                        Click here if you don't know what to enter
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[350px] sm:w-[450px] bg-white">
                                    <DialogTitle>Barcode number</DialogTitle>
                                    <img className="w-full h-full object-contain" src={onecardURL} alt="" />
                                    <DialogDescription>Enter the number above the barcode in your TU OneCard</DialogDescription>
                                </DialogContent>
                            </Dialog>
                            <Button variant="outline" onClick={checkStorage}>Generate Code</Button>
                        </div>
                    </div>
                </form>
            </CardContent>
            {/* Barcode Scanner Modal */}
            <Dialog open={scannerOpen} onOpenChange={(open) => { if (!open) handleScannerClose(); }}>
                <DialogContent
                    className="sm:max-w-[425px] max-w-full w-full sm:w-auto bg-white p-0 flex flex-col items-center"
                    style={{ maxWidth: '95vw', width: '100%', height: '85vh', maxHeight: '500px' }}
                >
                    <DialogTitle className="text-center w-full">Scan your TU OneCard  barcode </DialogTitle>
                    <div className="flex-1 w-full flex items-center justify-center">
                        <BarcodeScanner
                            width={"100%"}
                            height={"100%"}
                            onUpdate={handleScanUpdate}
                            stopStream={stopStream}
                            onError={() => {}}
                        />
                    </div>
                    <Button variant="ghost" type="button" className="w-full mt-2" onClick={handleScannerClose}>Cancel</Button>
                </DialogContent>
            </Dialog>
        </Card>
    )
}
