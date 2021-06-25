import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from 'react-google-charts';
import axios from 'axios';

function Secondpage() {
    const [dogs, setDogInfo] = useState({
        Dog_breed: '',
        hashtag1: '',
        hashtag2: '',
        hashtag3: '',
        Diagram1: '',
        Diagram2: '',
        Diagram3: '',
        Diagram4: '',
        Diagram5: '',
        feature: '',
        warning: '',
        Vital_Status1: '',
        Vital_Status2: '',
        Vital_Status3: '',
        Vital_Status4: '',
    });
    let posts = { color: 'black', fontSize: '20px' };

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(({ data }) =>
                setDogInfo(
                    (dogs.Dog_breed = data.Dog_breed),
                    (dogs.hashtag1 = data.hashtag1),
                    (dogs.hashtag2 = data.hashtag2),
                    (dogs.hashtag3 = data.hashtag3),
                    (dogs.Diagram1 = data.Diagram1),
                    (dogs.Diagram2 = data.Diagram2),
                    (dogs.Diagram3 = data.Diagram3),
                    (dogs.Diagram4 = data.Diagram4),
                    (dogs.Diagram5 = data.Diagram5),
                    (dogs.feature = data.feature),
                    (dogs.warning = data.warning),
                    (dogs.Vital_Status1 = data.Vital_Status1),
                    (dogs.Vital_Status2 = data.Vital_Status2),
                    (dogs.Vital_Status3 = data.Vital_Status3),
                    (dogs.Vital_Status4 = data.Vital_Status4),
                )
            );
    }, []);

    return (
        <div className="App">
            <div className="title">
                <div className="pre.img">
                    <img src="images/species.pre.jpg" />
                </div>
                <div style={{ fontSize: '30px', color: '#FF6363' }}>
                    백치미 넘치는 귀여운{' '}
                    <span style={{ fontSize: '40px', color: 'black' }}>{dogs.Dog_breed}</span>{' '}
                </div>
                <div className="Hashtag">
                    <p>{dogs.hashtag1}{dogs.hashtag2}{dogs.hashtag3}</p>
                </div>
            </div>

            <div className="body">
                <div className="dia">
                    <h3 style={posts}> 항목별 강아지 역량 </h3>
                    <p>
                        {' '}
                        해당 지표에 대한 견종별 데이터를 분석해 막대그래프로 제공해드립니다!{' '}
                    </p>
                    <div className="chart">
                        <Chart
                            width={'500px'}
                            height={'300px'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['항목', '역량'],
                                ['적응성', dogs.Diagram1],
                                ['건강 관리도', dogs.Diagram2],
                                ['운동성', dogs.Diagram3],
                                ['훈련 가능성', dogs.Diagram4],
                                ['친근함', dogs.Diagram5],
                            ]}
                            options={{
                                chartArea: { width: '50%' },
                                hAxis: {
                                    title: '항목별 강아지 역량',
                                    minValue: 0,
                                },
                                vAxis: {
                                    title: '항목',
                                },
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </div>
                </div>

                <div className="feature">
                    <h3 style={posts}> 강아지 특징 </h3>
                    <p> {dogs.feature} </p>
                    <hr />
                </div>

                <div className="caution">
                    <h3 style={posts}> 강아지 주의사항 </h3>
                    <p> {dogs.warning} </p>
                    <hr />
                </div>
            </div>

            <div className="vital">
                <h3 style={posts}> Vital Status </h3>
                <p> infor </p>
                <div className="dog">
                    <img src="/images/vital/dog.png" /> <p style={posts}>견종 분류</p>
                    <p>{dogs.Vital_Status1}</p>
                </div>

                <div className="height">
                    <img src="/images/vital/height.png" /> <p style={posts}>신장</p>
                    <p>{dogs.Vital_Status2}</p>
                </div>

                <div className="weight">
                    <img src="/images/vital/weight.png" /> <p style={posts}>무게</p>
                    <p>{dogs.Vital_Status3}</p>
                </div>

                <div className="life">
                    <img src="/images/vital/life.png" /> <p style={posts}>기대 수명</p>
                    <p>{dogs.Vital_Status4}</p>
                </div>
                <hr />
            </div>
        </div>
    );
}
export default Secondpage;