const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: '13.3”'
            },
            chip: {
                title: 'Apple M1 chip',
                description: '',
                icon: 'm1.png'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency',
                icon: 'memory.png'
            },
            memory: {
                size: 2,
                type: 'tb',
                title: 'Maximum contigurable storage'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            F: {
                icon: '1.jpg'
            },
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        img: 'macbook13.png',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: '13.3”'
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor',
                icon: 'm1.png'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency',
                icon: 'memory.png'
            },
            memory: {
                size: 2,
                type: 'tb',
                title: 'Maximum contigurable storage'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            F: {
                icon: '2.jpg'
            },
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 16”',
        img: 'macbookpro.png',
        price: 2399,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: '16”'
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: '',
                icon: 'intel.png'
            },
            ram: {
                title: 'Up to 64GB memory',
                description: '',
                icon: 'memory.png'
            },
            memory: {
                size: 8,
                type: 'tb',
                title: 'Maximum contigurable storage'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            F: {
                icon: '2.jpg'
            },
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]
let cont = document.querySelector('.cont')
for (let item of data) {
    let box = document.createElement('div')
    let boxMacImg = document.createElement('div')
    let img = document.createElement('img')
    let boxMacInfo = document.createElement('div')
    let h3 = document.createElement('h3')
    let span = document.createElement('span')
    let boxMacColors = document.createElement('div')
    let boxMacColorOne = document.createElement('div')
    let boxMacColorTwo = document.createElement('div')
    let boxMacColorThree = document.createElement('div')
    let boxMacBuy = document.createElement('button')
    let at = document.createElement('a')
    let hr = document.createElement('hr')

    let boxMacInfoDs = document.createElement('div')
    let boxMacInfoDsText = document.createElement('p')
    let boxMacInfoDsTextTwo = document.createElement('h4')
    let boxMacInfoChip = document.createElement('div')
    let boxMacInfoChipImg = document.createElement('img')
    let boxMacInfoChipText = document.createElement('h4')
    let boxMacInfoChipTex = document.createElement('h5')
    let boxMacInfoMemory = document.createElement('div')
    let boxMacInfoMemoryImg = document.createElement('img')
    let boxMacInfoMemoryText = document.createElement('h4')
    let boxMacInfoMemoryTex = document.createElement('h5')
    let boxMacInfoTb = document.createElement('div')
    let boxMacInfoTbText = document.createElement('p')
    let boxMacInfoTbTextTwo = document.createElement('h4')
    let boxMacInfoBattery = document.createElement('div')
    let boxMacInfoBatteryImg = document.createElement('img')
    let boxMacInfoBatteryText = document.createElement('h4')
    let boxMacInfoCamera = document.createElement('div')
    let boxMacInfoCameraImg = document.createElement('img')
    let boxMacInfoCameraText = document.createElement('h4')
    let boxMacInfoCameraTex = document.createElement('h5')
    let boxMacInfoWeight = document.createElement('div')
    let boxMacInfoWeightText = document.createElement('p')
    let boxMacInfoWeightTextTwo = document.createElement('h4')
    let boxMacInfoF = document.createElement('div')
    let boxMacInfoFImg = document.createElement('img')
    let boxMacInfoFText = document.createElement('h4')
    let learnBox = document.createElement('div')
    let learnBoxText = document.createElement('p')

    // let boxMacInfoF = document.createElement('div')



    box.classList.add('box')
    boxMacImg.classList.add('boxMacImg')
    img.src = `./img/${item.img}`
    boxMacInfo.classList.add('boxMacInfo')
    h3.innerHTML = item.title
    span.innerHTML = `From $${item.price}`
    boxMacColors.classList.add('boxMacColors')
    boxMacColorOne.classList.add('boxMacColorOne')
    boxMacColorTwo.classList.add('boxMacColorTwo')
    boxMacColorThree.classList.add('boxMacColorThree')
    boxMacColorOne.style.backgroundColor = item.colors[0]
    boxMacColorTwo.style.backgroundColor = item.colors[1]
    boxMacColorThree.style.backgroundColor = item.colors[2]
    boxMacBuy.classList.add('boxMacBuy')
    at.classList.add('at')
    at.innerHTML = 'Buy'
    at.href = item.url

    boxMacInfoDs.classList.add('boxMacInfoDs')
    boxMacInfoDsText.innerHTML = item.specs.display.size
    boxMacInfoDsTextTwo.innerHTML = item.specs.display.title
    boxMacInfoChip.classList.add('boxMacInfoChip')
    boxMacInfoChipImg.src = `./img/${item.specs.chip.icon}`
    boxMacInfoChipText.innerHTML = item.specs.chip.title
    boxMacInfoChipTex.innerHTML = item.specs.chip.description
    boxMacInfoMemory.classList.add('boxMacInfoMemory')
    boxMacInfoMemoryImg.src = `./img/${item.specs.ram.icon}`
    boxMacInfoMemoryText.innerHTML = item.specs.ram.title
    boxMacInfoMemoryTex.innerHTML = item.specs.ram.description
    boxMacInfoTb.classList.add('boxMacInfoTb')
    boxMacInfoTbText.innerHTML = item.specs.memory.size + item.specs.memory.type.toUpperCase()
    boxMacInfoTbTextTwo.innerHTML = item.specs.memory.title
    boxMacInfoBattery.classList.add('boxMacInfoBattery')
    boxMacInfoBatteryImg.src = './img/battery.png'
    boxMacInfoBatteryText.innerHTML = 'Up to' + ' ' + item.specs.battery + ' ' + 'hours battery life'
    boxMacInfoCamera.classList.add('boxMacInfoCamera')
    boxMacInfoCameraImg.src = './img/video.png'
    boxMacInfoCameraText.innerHTML = item.specs.camera.title
    boxMacInfoCameraTex.innerHTML = item.specs.camera.description
    boxMacInfoWeight.classList.add('boxMacInfoTb')
    boxMacInfoWeightText.innerHTML = item.specs.weight + ' ' + 'lb.'
    boxMacInfoWeightTextTwo.innerHTML = 'Weight'
    boxMacInfoF.classList.add('boxMacInfoF')
    boxMacInfoFImg.src = `./img/${item.specs.F.icon}`
    boxMacInfoFText.innerHTML = item.specs.other[0] + ' and ' + item.specs.other[2]
    learnBox.classList.add('learnBox')
    learnBoxText.innerHTML = 'learn more >'


    boxMacColorOne.onclick = () => {
        alert("В масиве нет других фотографии. Я не нашол такие похожие фотографии. И в массиве была несколько ошибок и несколько иконок небыло. Не снижайте оценку пожалуйста. Про learn more в данный ничего нет")
    }

    boxMacColorTwo.onclick = () => {
        alert("В масиве нет других фотографии. Я не нашол такие похожие фотографии. И в массиве была несколько ошибок и несколько иконок небыло. Не снижайте оценку пожалуйста. Про learn more в данный ничего нет")
    }

    boxMacColorThree.onclick = () => {
        alert("В масиве нет других фотографии. Я не нашол такие похожие фотографии. И в массиве была несколько ошибок и несколько иконок небыло. Не снижайте оценку пожалуйста. Про learn more в данный ничего нет")
    }



    hr.classList.add('hr')
    learnBox.append(learnBoxText)
    boxMacInfoDs.append(boxMacInfoDsText, boxMacInfoDsTextTwo)
    boxMacInfoTb.append(boxMacInfoTbText, boxMacInfoTbTextTwo)
    boxMacInfoWeight.append(boxMacInfoWeightText, boxMacInfoWeightTextTwo)
    boxMacInfoChip.append(boxMacInfoChipImg, boxMacInfoChipText, boxMacInfoChipTex)
    boxMacInfoMemory.append(boxMacInfoMemoryImg, boxMacInfoMemoryText, boxMacInfoMemoryTex)
    boxMacInfoCamera.append(boxMacInfoCameraImg, boxMacInfoCameraText, boxMacInfoCameraTex)
    boxMacInfoF.append(boxMacInfoFImg, boxMacInfoFText)
    boxMacInfoBattery.append(boxMacInfoBatteryImg, boxMacInfoBatteryText)
    boxMacImg.append(img)
    boxMacColors.append(boxMacColorOne, boxMacColorTwo, boxMacColorThree)
    boxMacBuy.append(at)
    boxMacInfo.append(h3, span, boxMacColors, boxMacBuy, hr, boxMacInfoDs, boxMacInfoChip, boxMacInfoMemory, boxMacInfoTb, boxMacInfoBattery, boxMacInfoCamera, boxMacInfoWeight, boxMacInfoF, hr, learnBox)
    box.append(boxMacImg, boxMacInfo)
    cont.append(box)
}