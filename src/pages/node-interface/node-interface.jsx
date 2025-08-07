import "./node-interface.css";

const NodeInterfacePage = () => {
  return (
    <main className="nodeInterface-main">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-circle bg-red-500"></div>
          <div className="terminal-circle bg-yellow-500"></div>
          <div className="terminal-circle bg-green-500"></div>
          <div className="terminal-console">~/dev/unix</div>
        </div>
        <div className="terminal-main">
          <div className="terminal-output"></div>
          <div className="terminal-output"></div>
          <div className="terminal-output"></div>
          <div className="terminal-output"></div>
          <div className="terminal-output"></div>
          <div className="terminal-output"></div>
          <div className="terminal-output"></div>
        </div>
      </div>
      <div className="hexagon">
        <div className="hexagon-inner-1">
          <div className="hexagon-inner-2">
            <div className="hexagon-inner-3">
              <div className="hexagon-inner-4">
                <div className="hexagon-inner-5">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NodeInterfacePage;
