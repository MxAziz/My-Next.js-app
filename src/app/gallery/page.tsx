import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-amber-400 text-center'>This is the Gallery Page</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda deleniti a nam! Eaque amet dolorum exercitationem eveniet assumenda totam temporibus sint enim reprehenderit ab velit, at hic ad possimus, adipisci cum. Rem odit pariatur eaque ut a accusantium incidunt, eligendi, voluptatum officia corrupti cum dicta, veniam minima esse quidem tenetur non eveniet dolorem alias tempora sint. Nemo unde exercitationem totam doloribus, ipsam aut quidem et, aliquid veritatis minima itaque? Vel nostrum minus fugiat, illum quam ex ut nemo atque cupiditate ullam repellendus sint qui vitae non, labore beatae id quasi dolorum quisquam dolor suscipit rem eaque temporibus magnam? Cumque, a? Provident ad dignissimos pariatur fuga voluptas placeat, tempora tenetur voluptatum autem dolore alias nobis sint. Dolore accusantium nam quidem in sunt molestiae, sed culpa labore cumque! Ipsam aliquid sit fuga tempore? Eos veniam esse assumenda cumque doloribus molestiae iusto sint deleniti nostrum, quas animi nihil, necessitatibus unde, quaerat ipsa quis voluptatibus pariatur placeat? Officia, delectus suscipit dolore repellendus voluptates eaque illo eveniet dicta ex itaque illum ad eligendi architecto asperiores ratione repellat perspiciatis culpa ea ipsum id omnis? Delectus, tempora praesentium repellat eum at, pariatur, provident error id commodi consectetur eos accusamus sint deserunt! Laboriosam quia veniam ratione qui at.</p>
            <div className='flex justify-center'>
                <Image
                    src="/next-chapter.jpg"
                    alt='next chapter image'
                    width={400}
                    height={300}
                    className='object-cover'
                ></Image>

                <Image
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcodesandbox.io%2Fp%2Fsandbox%2Fstrange-wave-fxis37&psig=AOvVaw2sEV0KOTTjFyanwEmw9OMZ&ust=1761806305810000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMC7zozmyJADFQAAAAAdAAAAABAK"
                    alt='next chapter image'
                    width={400}
                    height={300}
                    className='object-cover'
                ></Image>
            </div>
        </div>
    );
};

export default GalleryPage;