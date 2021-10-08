const ids = ["a1","b2","c3","d4","e5","f6","g7","h8","i9"]

async function analyze(files){
    let data = []
    for (f of files) {
        let match = JSON.parse(await f.text())
        match.name = f.name
        data.push(match)
    }

    verify(data)

    line_time_dropped_vs_rank(data)
    line_gas_death_by_rank(data)
    line_time_alive_vs_rank(data)

    boxplot_time_jumped_by_rank(data)
    boxplot_time_landed_by_rank(data)
    boxplot_time_parachuting_by_rank(data)
    boxplot_time_death_by_rank(data)
}