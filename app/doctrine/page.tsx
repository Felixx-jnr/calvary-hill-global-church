import LeftDoctrine from "@/components/About/LeftDoctrine";
import RightDoctrine from "@/components/About/RightDoctrine";
import Header from "@/components/Header";
import React from "react";

const doctrine = () => {
  return (
    <main className="bg-smokeWhite pb-10">
      <Header header="Doctrines" />
      <div>
        <LeftDoctrine
          title="Sola Scriptura: Scripture Alone"
          paragraph="We believe that the scripture alone, is the final authority for all who are saved, not human traditions or old long church practices (2 Timothy 3:16-17). Sola Scriptura means that it's in the scriptures alone we find everything about the Christian life as touching salvation, God, forgiveness, the spirituals etc. We do not seek to know anything about God outside the scriptures or through human opinions or traditions."
          secondParagraph="Sola Scriptura also means that nothing is above the Word of God, not even our experiences. While we do not discard all experiences, we also do not hold experiences above the written Word, no matter how wonderful the experiences are."
          imgSrc="/about/scriptura.avif"
        />
      </div>

      <div>
        <RightDoctrine
          title="Sola Gratia: Grace Alone"
          paragraph="We believe that a man is saved by grace alone as the Bible teaches (Ephesians 2:8). Salvation from sin, hell and Satan is as a result of God's undeserving grace, not something we deserve. We are not saved by church attendance, though church attendance is very important. We are not saved by working in church, though that is also important. Nothing we did saved or saves us, but God by His grace through Christ's finished work is what gives us salvation. We cannot pray enough to have our sins forgiven or give enough or confess enough, etc. We can only rely on God's grace through Christ's death, burial and resurrection to do the job."
          imgSrc="/about/gratia.avif"
        />
      </div>

      <div>
        <LeftDoctrine
          title="Sola Fide: Justification by faith alone"
          paragraph="We believe that righteousness is by faith alone. The scripture says that righteousness or justification before God is simply by faith in what Jesus Christ did for us (Galatians 2:16). The scriptures expressly say that we cannot earn right standing with God by our good works, but through the resurrection of Jesus Christ (Romans 4:25)."
          secondParagraph="Faith in Jesus clears our account of sins, and puts in our account the righteousness of Christ. This means that Christ's righteousness became ours which gives us power over sin, Satan and death and gave us the ability to stand before God without any feeling of fear, guilt or condemnation."
          imgSrc="/about/fide.avif"
        />
      </div>

      <div>
        <RightDoctrine
          title="⁠Soli Deo Gloria: The Glory of God Alone"
          paragraph="We live for the glory of God alone, not for our glory. We live to expand the kingdom of God, not our own kingdom. Everything we do is to bring glory to God and in everything we do for the kingdom, we give glory to Him. Be it in service, in worship, in pursuit of career and education, we must centre everything around the glory of God. The Apostle Paul says, “for me to live is Christ” (Philippians 1:21). This is the same for us all. We live for His glory, to bring honour to His name and kingdom."
          imgSrc="/about/gloria.avif"
        />
      </div>

      <div>
        <LeftDoctrine
          title="Sola Christus: Christ alone!"
          paragraph="We believe that Christ alone is our Lord and Saviour. The scriptures tell us that everything we are as believers is because of the finished work of Christ alone. It's never Jesus plus anything as touching salvation, forgiveness, justification, having the Holy Spirit etc. It is because of Christ alone. We are saved in Christ alone, righteous in Christ alone, holy in Christ alone, good in Christ alone etc. Hence, there is no boasting in ourselves, but to boast in Christ alone (1 Corinthians 1:29-31). We have one Lord and Saviour (Ephesians 4:5). We submit to what Jesus says as our Lord and do what He says (Luke 6:46)."
          imgSrc="/about/christus.avif"
        />
      </div>
    </main>
  );
};

export default doctrine;
