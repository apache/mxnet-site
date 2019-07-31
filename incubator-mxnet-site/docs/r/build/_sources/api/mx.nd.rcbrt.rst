.. raw:: html



``mx.nd.rcbrt``
==============================

Description
----------------------

Returns element-wise inverse cube-root value of the input.

.. math::

   rcbrt(x) = 1/\sqrt[3]{x}

**Example**::
	 
	 rcbrt([1,8,-125]) = [1.0, 0.5, -0.2]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/tensor/elemwise_unary_op_basic.cc#L898


.. disqus::
   :disqus_identifier: mx.nd.rcbrt
