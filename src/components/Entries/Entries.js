import React from "react";
import "./Entries.css";

const Entries = () => {
  return (
    <div id="entries" className="entries">
      <div className="h2-wrapper">
        <h2 className="entries-h2">Python Pandas</h2>
      </div>

      <img
        className="panda"
        src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhbmRhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
        alt="panda eating bamboo"
      />
      <h3 className="entries-h3">Getting Started</h3>
      <article className="blog-body">
        One method to installing python pandas onto your machine. First you open
        a new window in VSCode by navigating to the top of the screen and and
        clicking <span>File New Window</span>. From there you are going to open
        a new terminal either by selecting command + J or by navigating up to
        the tip of the screen again and selecting View Terminal. #2: From the
        terminal create a python folder. If you want this folder to live on your
        Desktop you will use the following command <span>mkdir python</span>.
        This will create a new folder on your Desktop with the name python. Next
        enter <code>code .</code> which will open a new window with your newly
        created python folder. Now its time to create out personal environment,
        go back to the terminal and enter{" "}
        <code>python3.9 -m venv pythontime</code> Note that you can replace the
        name pythontime with your own creative name. Type ls to list everythind
        under the file. You should see the new environment you just created. To
        enter that environment type{" "}
        <code>source nameofyourenviroment/bin/activate</code>. Next you should
        notice the name of your environment in pararenthis. Lastly and what you
        have all been waiting for type <code>pip install pandas</code>. To
        ensure that the pandas have installed correctly create a new file by
        navigating to the navbar and selecting File New File or in the terminal
        you can simply enter <code>touch filename.py</code>. In the new file at
        the top <code>import pandas as pd</code> pd can be altered and named
        whatever name you want.
        <code>data = pd.Series([1,2,3])</code>. If you aren't fimiliar with
        Series they represent a one dimensional array of indexed data. It has
        two main components <span>1: An array of actual data</span>
        <span>2: An associated array of index or data lables</span>
        now let's print the data <code>print(data)</code>, save and run the file
        and if all went well you should see the data printed under the output
        tab of the terminal.
      </article>
      <a className="back-button" href="/blog">
        Back to Articles
      </a>
    </div>
  );
};

export default Entries;
