document.querySelector("#bday_date").textContent = `${String(new Date().getDate()).padStart(2, "0")}/${String(new Date().getMonth() + 1).padStart(2, "0")}`;

async function StartCamera()
{
    document.querySelector("#camera").srcObject = await navigator.mediaDevices.getUserMedia({
        video: true
    });
}

function StopCamera()
{
    if(document.querySelector("#camera").srcObject)
    {
        document.querySelector("#camera").srcObject.getTracks().forEach((track) => {
            return track.stop();
        });
        document.querySelector("#camera").srcObject = null;
    }
}

document.querySelector("#header").addEventListener("mouseenter", StartCamera());
document.querySelector("#header").addEventListener("mouseenter", StopCamera());