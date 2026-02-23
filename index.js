function superbowlWin(arr)
{
	for (const element of arr)
	{
		if (element.result === "W")
			return element.year
	}
}
