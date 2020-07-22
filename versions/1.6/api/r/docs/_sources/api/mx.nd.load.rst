

``mx.nd.load``
============================

Description
----------------------

Load an mx.nd.array object on disk

**Example**::

	 mat = mx.nd.array(1:3)
	 mx.nd.save(mat, 'temp.mat')
	 mat2 = mx.nd.load('temp.mat')
	 as.array(mat)
	 as.array(mat2)
	 
Usage
----------

.. code:: r

	mx.nd.load(filename)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``filename``                           | the filename (including the path)                          |
+----------------------------------------+------------------------------------------------------------+



