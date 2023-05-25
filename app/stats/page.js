"use client";
import React, { useState, useEffect } from 'react'
import jsonData from '../../data.json'

function LeagueStatsTable() {
  const [tableData, setTableData] = useState([])
  const [sortField, setSortField] = useState('points')
  const [sortOrder, setSortOrder] = useState('desc')

  useEffect(() => {
    const data = Object.entries(jsonData).map(([key, value]) => ({
      name: key,
      ...value,
    }))
    const sortedData = data.sort((a, b) => {
      if (a[sortField] > b[sortField]) {
        return sortOrder === 'asc' ? 1 : -1
      }
      if (a[sortField] < b[sortField]) {
        return sortOrder === 'asc' ? -1 : 1
      }
      return 0
    })
    setTableData(sortedData)
  }, [sortField, sortOrder])

  const handleSortClick = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('desc')
    }
  }

  return (
    <div className="container mx-auto bg-brand-bg">
      <table className="w-full text-black">
        <thead>
          <tr className="border-b border-white">
            {[
              'Name',
              'Wins',
              'Losses',
              'Matches',
              'Winrate',
              'Points',
              'Rank',
            ].map((text, index) => (
              <th
                key={index}
                onClick={() => handleSortClick(text.toLowerCase())}
                className="font-bold cursor-pointer py-2"
              >
                {text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="text-center py-1">
              <td className="py-2">{row.name}</td>
              <td>{row.wins}</td>
              <td>{row.losses}</td>
              <td>{row.matches}</td>
              <td>{(row.winrate * 100).toFixed(2)}%</td>
              <td>{row.points}</td>
              <td>{row.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeagueStatsTable