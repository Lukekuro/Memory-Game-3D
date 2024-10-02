import { Color } from './color';

export const InfoPanel = ({ trial, markReset, colors, markColor }) => {

    const all_Colors = colors.map((color) => (
        <Color key={color} color = {color} markColor = {markColor} />
    ));

    return (
        <div className="c-board__panel panel-trial">
            <span className="text-lg">Trial: {trial}</span>
            <div className="block">
                <div className="c-board__panel__color">
                    {all_Colors}
                </div>

                <button className="btn" onClick={markReset}>Reset</button>
            </div>
        </div>
    )
};


