CREATE PROCEDURE dbo.newMessage -- LISTO
	@textMessage	VARCHAR(500),
	@ID_Emiter		INT,
	@ID_Receiver	INT,
	@success		BIT		OUTPUT
AS 
	BEGIN
		IF ((SELECT COUNT(*) FROM dbo.Users AS U WHERE U.ID = @ID_Emiter) = 1) -- si existe el emisor
			BEGIN
				IF ((SELECT COUNT(*) FROM dbo.Users AS Us WHERE Us.ID = @ID_Receiver) = 1) -- si existe el receptor
					BEGIN
						INSERT INTO dbo.ChatMessages(TextMessage, ID_Emiter, ID_Receiver)  VALUES (@textMessage, @ID_Emiter, @ID_Receiver);
						SET @success = 1 -- exito
						SELECT @success
					END;
				ELSE
					BEGIN
						SET @success = 0 -- error
						SELECT @success				
					END;
			END;
		ELSE
			BEGIN
				SET @success = 0 -- error
				SELECT @success				
			END;			
	END;
GO

CREATE PROCEDURE dbo.loginUsers -- LISTO
	@userName		VARCHAR(50),
	@contrasenia	VARCHAR(50),
	@success		BIT		OUTPUT
AS 
	BEGIN
		IF ((SELECT COUNT(*) FROM dbo.Users AS U WHERE U.UserName = @userName AND U.Contrasenia = @contrasenia) = 1) -- si existe el usuario
			BEGIN
				SET @success = 1 -- exito
				SELECT @success		
			END;
		ELSE
			BEGIN
				SET @success = 0 -- error
				SELECT @success				
			END;			
	END;
GO