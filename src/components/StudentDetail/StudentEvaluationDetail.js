import React from 'react';
import { Link } from 'react-router-dom';

function StudentEvaluationDetail({ evaluation, score }) {
  return (
      
      <div className=' '>
    <div className="flex">
      <h2 className="text-2xl font-bold text-primary-blue mb-2">{evaluation.date} </h2> 
      <span class="ms-4 text-center font-bold me-2 py-1 px-2.5  rounded bg-primary-blue text-black">Nota: {score}</span>
    </div>


<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="px-1 pe-3">
                    Número de estación
                </th>
                <th scope="col" class="px-6 py-3">
                    Descripción
                </th>
                <th scope="col" class="px-6 py-3">
                    Evaluador
                </th>
                
            </tr>
        </thead>
        <tbody>
            {evaluation.stations.map((station, index) => (
            <tr key={index} class="border-b bg-gray-800 border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                    {station.station.name}
                </th>
                <td class="px-6 py-4">
                    {station.station.description}
                </td>
                <td class="px-6 py-4">
                    {station.station.evaluator.name} {station.station.evaluator.last_name}
                </td>
                
            </tr>

            ))}
            
        </tbody>
    </table>
</div>
     
    </div>
  );
}

export default StudentEvaluationDetail;
