const items = buildItems()
console.log("Сортировка по удельной цене даёт:")
testGreedy(items, 20, cmpDencity)

function cmpDencity(a, b)
{
	const r = (a.value / a.weight) - (b.value / b.weight)
	return r
}

function testGreedy(items, maxWeight, cmpFunction)
{
	const {totalValue, taken} = greedy(items, maxWeight, cmpFunction)
	console.log("Полная цена = ", totalValue.toString())
	console.log("Взяли:", taken.toString())
}

function greedy(items, maxWeight, cmpFunction)
{
	items.sort(cmpFunction)
	items.reverse()
	let totalWeight = 0
	let totalValue = 0
	const taken = []
	for (let i = 0; i < items.length; i++)
	{
		if( totalWeight + items[i].weight <= maxWeight)
		{
			taken.push(items[i].name)
			totalWeight += items[i].weight
			totalValue += items[i].value
		}
	}
	return {totalValue: totalValue, taken: taken}
}


function buildItems()
{
	const names = ["часы", "картина", "радио", "ваза", "книга", "компьютер"]
	const values = [175, 90, 20, 50, 10, 200]
	const weights = [10, 9, 4, 2, 1, 20]
	const items = []
	for (let i = 0; i < values.length; i++)
	{
		items.push({
			name:names[i],
			value: values[i],
			weight: weights[i]
		})
	}
	return items
}

