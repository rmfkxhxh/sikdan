const express = require('express');
const router = express.Router();
const session = require("express-session")
const FileStore = require('session-file-store')(session)


// const app = express();

// const host = '127.0.0.1'
// const port = 3000;

// app.set('view engine', 'pug')
// app.set('views', './pug')


let shopping_menus = [
    { ID: "주문/배송 조회변경", url: "/member/myOrderList" }
]

let point_menus = [
    { ID: "나의 쿠폰", url: "/member/myCoupon" }

]
let attention_menus = [
    { ID: "최근 본 상품", url: "/member/myViewItemList" },
    { ID: "관심 상품", url: "/member/myFavorate" },
]
let community_menus = [
    { ID: "다음달 예상등급", url: "/member/myInqueryList" },
    { ID: "1:1 문의내역", url: "/member/myReview" },
    { ID: "나의 상품후기", url: "/member/myItemQna" },
    { ID: "고객의 소리", url: "/member/myFaqList" }
]

let user_menus = [
    { ID: "회원정보 수정", url: "/member/myInfoCheckPW?TYPE=1" },
    { ID: "마케팅 수신 동의 설정", url: "/member/myMarketing" },
    { ID: "배송지 관리", url: "/member/myShippingAddrList" },
    { ID: "나의 기념일", url: "/member/myAnniversary" },
    { ID: "로그인 기록관리", url: "/member/myLoginLog" },
    { ID: "회원 탈퇴", url: "myInfoCheckPW?TYPE=2" }
]

// router.use(session({
//     secret: "my secret",
//     store: new FileStore(),
//     secure: false,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: (1000 * 60 * 100) //miliseconds
//     }
// }));

router.get('/', (req, res) => {
    if (req.session.user) {
        console.log(req.session)
        res.render("memberindex", {
            menu1: shopping_menus,
            menu2: point_menus,
            menu3: attention_menus,
            menu4: community_menus,
            menu5: user_menus,
            breadcrumbList: ["HOME", "마이페이지"],
            sessionValid: req.session.valid,
            userId: req.session.user.Id,
            user : req.session.user
        })
    } else {
        console.log(req.session)
        res.send('<script>alert("로그인 후 사용 해주세여"); window.location.href = "/login"; </script>');
        // res.redirect('/login')
    }
})

router.get('/login', (req, res) => {
    res.redirect('../login')
})

router.get('/myOrderList', (req, res) => {
    if (req.session.user) {
        res.render("myOrderList", {
            menu1: shopping_menus,
            menu2: point_menus,
            menu3: attention_menus,
            menu4: community_menus,
            menu5: user_menus,
            breadcrumbList: ["HOME", "마이페이지", "주문/배송 조회·변경"],
            sessionValid: req.session.valid,
            userId: req.session.user.Id,
            user : req.session.user
        })
    } else {
        console.log(req.session)
        res.send('<script>alert("로그인 후 사용 해주세여"); window.location.href = "/login"; </script>');
        // res.redirect('/login')
    }
})

router.get('/myClaimList', (req, res) => {
    res.render("myClaimList", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})


router.get('/myShippingItemList', (req, res) => {
    res.render("myShippingItemList", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

//나의 혜택관리
router.get('/myBenefit', (req, res) => {
    res.render("myBenefit", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

router.get('/myPoint', (req, res) => {
    res.render("myPoint", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

router.get('/myCoupon', (req, res) => {
    res.render("myCoupon", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

// app.get('/', (req,res) => {
//     res.render("index", {
//         menu1 : shopping_menus,
//         menu2 : point_menus,
//         menu3 : attention_menus,
//         menu4 : community_menus,
//         menu5 : user_menus
// })})

//나의 관심내역
router.get('/myViewItemList', (req, res) => {
    res.render("myViewItemList", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

router.get('/myFavorate', (req, res) => {
    res.render("myFavorate", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

//나의 커뮤니티
router.get('/myInqueryList', (req, res) => {
    res.render("myInqueryList", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

router.get('/myReview', (req, res) => {
    res.render("myReview", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

router.get('/myItemQna'), (req, res) => {
    res.render("myItemQna", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
}

router.get('/myFaqList', (req, res) => {
    res.render("myFaqList", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

//회원정보
router.get('/myInfoCheckPWTYPE=1', (req, res) => {
    res.render("myInfoCheckPW", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

router.get('/myMarketing', (req, res) => {
    res.render("myMarketing", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

router.get('/myShippingAddrList', (req, res) => {
    res.render("myShippingAddrList", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

router.get('/myAnniversary', (req, res) => {
    res.render("myAnniversary", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus,
        breadcrumbList: ["HOME", "마이페이지", "나의기념일"]
    })
})

router.get('/myLoginLog', (req, res) => {
    res.render("myLoginLog", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})


router.get('myInfoCheckPWTYPE=2', (req, res) => {
    res.render("myInfoCheckPW?TYPE=2", {
        menu1: shopping_menus,
        menu2: point_menus,
        menu3: attention_menus,
        menu4: community_menus,
        menu5: user_menus
    })
})

module.exports = router;