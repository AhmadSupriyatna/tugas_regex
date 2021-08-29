function panggilRegexp(value) {
    let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
    let res = str.toUpperCase()
    console.log(str.match(/[cC]/g));
    console.log(str.match(/[kK]/g));
    console.log(str.match(/[iL]/g));
}
panggilRegexp()